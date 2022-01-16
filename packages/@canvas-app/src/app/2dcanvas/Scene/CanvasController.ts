import Events from '../../utils/Events.class'
import { ECanvasState, Scene } from './Scene'

const KEYCODE_DELETE: number = 46
const KEYCODE_CTRL: number = 17

export class CanvasContoller extends Scene {
	private variablesPool: { [key: string]: any }
	private eventsHandler: Events
	constructor(canvasElement: HTMLCanvasElement) {
		super(canvasElement)
		this.variablesPool
		this.eventsHandler
	}

	public init(): void {
		this.variablesPool = {}
		this.eventsHandler = new Events()
		this.initScene()
		this.initCanvasContoller()
	}

	private initCanvasContoller(): void {
		this.bindRightClickEvent()
		this.bindMousedownEvent()
		this.bindMousemoveEvent()
		this.bindMouseupEvent()
		this.bindKeydownEvent()
		this.bindKeyupEvent()
		this.bindBlurEvent()
	}

	private isOnlyCtrlKeydown(): boolean {
		return this.keyboardState.keys.length === 1 && this.keyboardState.keys[0] === KEYCODE_CTRL
	}

	private bindRightClickEvent(): void {
		this.canvasElement.addEventListener('contextmenu', evte => {
			// evte.preventDefault()
		})
	}

	private bindMousedownEvent(): void {
		this.canvasElement.addEventListener('mousedown', evte => {
			evte.stopPropagation()
			this.mouseState.down = true
			this.mouseState.x = evte.offsetX
			this.mouseState.y = evte.offsetY
			Promise.resolve().then(() => {
				if (evte.button !== 0) {
					return
				}
				/* 绘制模式 */
				if (this.config.state === ECanvasState.DRAWING) {
					this.mouseState.selectedIndexs = []
					/* 创建图形实例 */
					if (this.geometryConstructor) {
						this.variablesPool.geometryTarget = new this.geometryConstructor(this.mouseState.x, this.mouseState.y)
						this.variablesPool.geometryTarget.setNormalPaintStyle(this.toolState.paintBrushState)
						this.variablesPool.geometryTarget.setAssistSetting({ smooth: this.toolState.smooth })
					}
					/* 将新创建的实例标注为鼠标动态跟踪对象  */
					this.mouseState.pointTarget = this.variablesPool.geometryTarget
					this.variablesPool.geometryTarget = null
					/* 重绘离屏画布 */
					this.clearCanvas(this.offScreen.cacheCanvasCtx)
					for (let i: number = 0; i < this.geometries.length; i++) {
						this.geometries[i].setUnHighlight()
						this.geometries[i].setUnChecked()
						this.geometries[i].draw(this.offScreen.cacheCanvasCtx)
					}
					/* ... */
					this.config.dirty = true
					return
				}
				/* 选择模式 */
				if (this.config.state === ECanvasState.SELECT) {
					this.variablesPool.targetResult = this.findClickedTarget(this.mouseState.x, this.mouseState.y)
					if (!this.variablesPool.targetResult.geometryTarget) {
						this.mouseState.selectedIndexs = []
						for (let i: number = 0; i < this.geometries.length; i++) {
							this.geometries[i].setUnChecked()
							this.geometries[i].setUnHighlight()
						}
						this.mouseState.toolTarget = this.tools.boxSelector
						this.mouseState.toolTarget.setStartCoordinate(this.mouseState.x, this.mouseState.y)
					} else {
						const inIndex: number = this.mouseState.selectedIndexs.indexOf(this.variablesPool.targetResult.geometryTargetIndex)
						if (this.mouseState.selectedIndexs.length >= 2 && inIndex >= 0) {
							if (this.isOnlyCtrlKeydown()) {
								if (inIndex >= 0) {
									this.mouseState.selectedIndexs.splice(inIndex, 1)
									this.variablesPool.targetResult.geometryTarget.setUnChecked()
									this.variablesPool.targetResult.geometryTarget.setUnHighlight()
								} else {
									this.mouseState.selectedIndexs.push(this.variablesPool.targetResult.geometryTargetIndex)
									this.variablesPool.targetResult.geometryTarget.setChecked()
									this.variablesPool.targetResult.geometryTarget.setHighlight()
								}
							}
						} else {
							if (this.isOnlyCtrlKeydown()) {
								if (inIndex >= 0) {
									this.mouseState.selectedIndexs.splice(inIndex, 1)
									this.variablesPool.targetResult.geometryTarget.setUnChecked()
									this.variablesPool.targetResult.geometryTarget.setUnHighlight()
								} else {
									this.mouseState.selectedIndexs.push(this.variablesPool.targetResult.geometryTargetIndex)
									this.variablesPool.targetResult.geometryTarget.setChecked()
									this.variablesPool.targetResult.geometryTarget.setHighlight()
								}
							} else {
								this.mouseState.selectedIndexs = [this.variablesPool.targetResult.geometryTargetIndex]
								for (let i: number = 0; i < this.geometries.length; i++) {
									if (this.mouseState.selectedIndexs.includes(i)) {
										continue
									}
									this.geometries[i].setUnChecked()
									this.geometries[i].setUnHighlight()
								}
								this.variablesPool.targetResult.geometryTarget.setChecked()
								this.variablesPool.targetResult.geometryTarget.setHighlight()
							}
						}
					}
					/* 重绘离屏画布 */
					this.clearCanvas(this.offScreen.cacheCanvasCtx)
					for (let i: number = 0; i < this.geometries.length; i++) {
						if (this.mouseState.selectedIndexs.includes(i)) {
							continue
						}
						this.geometries[i].draw(this.offScreen.cacheCanvasCtx)
					}
					/* ... */
					this.config.dirty = true
				}
			})
		})
	}

	private bindMousemoveEvent(): void {
		document.addEventListener('mousemove', evte => {
			evte.stopPropagation()
			if (!this.mouseState.down || this.isOnlyCtrlKeydown()) {
				return
			}
			if (
				evte.clientX - this.config.canvasRect.left <= 0 ||
				evte.clientY - this.config.canvasRect.top <= 0 ||
				evte.clientX >= this.config.canvasRect.right ||
				evte.clientY >= this.config.canvasRect.bottom
			) {
				return
			}
			this.variablesPool.moveDistX = evte.offsetX - this.mouseState.x
			this.variablesPool.moveDistY = evte.offsetY - this.mouseState.y
			this.mouseState.x = evte.offsetX
			this.mouseState.y = evte.offsetY
			this.mouseState.isMove = true
			/* 绘制模式 */
			if (this.config.state === ECanvasState.DRAWING && this.mouseState.pointTarget) {
				this.mouseState.pointTarget.setShapeParameter(this.mouseState.x, this.mouseState.y)
			}
			/* 选择模式 */
			if (this.config.state === ECanvasState.SELECT) {
				if (this.mouseState.toolTarget) {
					this.mouseState.toolTarget.setShapeParameter(this.mouseState.x, this.mouseState.y)
				}
				for (let i: number = this.mouseState.selectedIndexs.length - 1; i >= 0; i--) {
					const geometry = this.geometries[this.mouseState.selectedIndexs[i]]
					geometry.moveDist(this.variablesPool.moveDistX, this.variablesPool.moveDistY)
				}
			}
		})
	}

	private bindMouseupEvent(): void {
		document.addEventListener('mouseup', evte => {
			evte.stopPropagation()
			if (this.mouseState.down) {
				this.mouseState.isMove = false
				this.mouseState.down = false
				/* 绘制模式 */
				if (this.config.state === ECanvasState.DRAWING && this.mouseState.pointTarget) {
					/* 将当前图形推入存储队列 */
					if (this.mouseState.pointTarget.validate()) {
						this.mouseState.pointTarget.setIndex(this.geometries.length)
						this.geometries.push(this.mouseState.pointTarget)
					}
					this.mouseState.pointTarget = null
					/* 重绘离屏画布 */
					this.clearCanvas(this.offScreen.cacheCanvasCtx)
					for (let i: number = 0; i < this.geometries.length; i++) {
						this.geometries[i].draw(this.offScreen.cacheCanvasCtx)
					}
					/* ... */
					this.config.dirty = false
					return
				}
				/* 选择模式 */
				if (this.config.state === ECanvasState.SELECT) {
					if (this.mouseState.toolTarget) {
						this.mouseState.toolTarget.restoreStatus()
						this.mouseState.toolTarget = null
						this.clearCanvas(this.canvasCtx)
						/* 读取缓存画布图像并绘制输出 */
						this.paintWith(this.canvasCtx, this.offScreen.cacheCanvasElement)
					}
					this.mouseState.pointTarget = null
					/* ... */
					this.config.dirty = false
				}
			}
		})
	}

	private bindBlurEvent(): void {
		window.addEventListener('blur', evte => {
			this.keyboardState.keys = []
			this.config.dirty = false
		})
	}

	private bindKeydownEvent(): void {
		document.addEventListener('keydown', evte => {
			if (!this.keyboardState.keys.includes(evte.keyCode)) {
				this.keyboardState.keys.push(evte.keyCode)
			}
			/* 删除图形对象 */
			if (evte.keyCode === KEYCODE_DELETE && this.mouseState.selectedIndexs.length) {
				const geometries = []
				for (let i: number = 0; i < this.geometries.length; i++) {
					if (!this.mouseState.selectedIndexs.includes(i)) {
						geometries.push(this.geometries[i])
					}
				}
				this.geometries = geometries
				this.clearCanvas(this.offScreen.cacheCanvasCtx)
				for (let i: number = 0; i < this.geometries.length; i++) {
					this.geometries[i].draw(this.offScreen.cacheCanvasCtx)
				}
				this.config.dirty = true
				this.mouseState.selectedIndexs = []
			}
		})
	}

	private bindKeyupEvent(): void {
		document.addEventListener('keyup', evte => {
			const opKeyIndex: number = this.keyboardState.keys.indexOf(evte.keyCode)
			if (opKeyIndex >= 0) {
				this.keyboardState.keys.splice(opKeyIndex, 1)
			}
			if (!this.mouseState.down && !this.keyboardState.keys.length) {
				this.config.dirty = false
			}
		})
	}
}
