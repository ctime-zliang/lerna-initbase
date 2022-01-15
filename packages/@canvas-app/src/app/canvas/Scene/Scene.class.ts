import { Circle } from '../Geometies/Geometry.Circle'
import { Line } from '../Geometies/Geometry.Line'
import { Rect } from '../Geometies/Geometry.Rect'
import { BoxSelectTool } from '../Tools/Tool.class'
import { TDOMClientRect } from '../types/base.types'

export enum ECanvasState {
	DRAWING = 'DRAWING',
	SELECT = 'SELECT',
}

export type TGeometryType = Circle | Line | Rect | any

export type TCanvasBrushSetting = {
	fillStyle: string
	lineWidth: number
	strokeStyle: string
}

export type TSceneToolState = {
	paintBrushState: TCanvasBrushSetting
	smooth: boolean
}

export type TSceneTools = {
	boxSelector: BoxSelectTool
}

export type TSceneConfig = {
	state: ECanvasState.DRAWING | ECanvasState.SELECT
	canvasRect: TDOMClientRect
	dirty: boolean
	reDrawByResizeTimer: any
}

export type TSceneoffScreen = {
	cacheCanvasElement: HTMLCanvasElement
	cacheCanvasCtx: CanvasRenderingContext2D | any
}

export type TSceneKeyboardState = {
	keys: Array<number>
}

export type TSceneMouseState = {
	x: number
	y: number
	targetOffsetX: number
	targetOffsetY: number
	selectedIndexs: Array<number>
	down: boolean
	pointTarget: TGeometryType
	toolTarget: TGeometryType
	isMove: boolean
}

export type TSceneClickFoundRes = {
	geometryTarget: TGeometryType
	geometryTargetIndex: number
}

export const DEFAULT_BRUSH_CONFIG: TCanvasBrushSetting = {
	strokeStyle: '#000000',
	fillStyle: '#ffff00',
	lineWidth: 4,
}

export class Scene {
	protected geometryConstructor: TGeometryType
	protected geometries: Array<TGeometryType>
	protected config: TSceneConfig | any
	protected tools: TSceneTools | any
	protected toolState: TSceneToolState | any
	protected mouseState: TSceneMouseState | any
	protected keyboardState: TSceneKeyboardState | any
	protected offScreen: TSceneoffScreen | any
	protected canvasElement: HTMLCanvasElement
	protected canvasCtx: CanvasRenderingContext2D | any
	constructor(canvasElement: HTMLCanvasElement) {
		if (!canvasElement || canvasElement.nodeName.toUpperCase() !== 'CANVAS') {
			return
		}
		this.geometryConstructor = null
		this.geometries = []
		this.config = {}
		this.tools = {}
		this.toolState = {}
		this.mouseState = {}
		this.keyboardState = {}
		this.offScreen = {}
		this.canvasElement = canvasElement
		this.canvasCtx = canvasElement.getContext('2d')
	}

	private bindWindowResizeEvent(): void {
		window.addEventListener('resize', evte => {
			window.clearTimeout(this.config.reDrawByResizeTimer)
			this.config.reDrawByResizeTimer = window.setTimeout(() => {
				this.config.canvasRect = this.createCanvasRect()
				this.setCanvasElementRect()
				/* 重绘输出画布 */
				this.clearCanvas(this.canvasCtx)
				for (let i = this.geometries.length - 1; i >= 0; i--) {
					this.geometries[i].draw(this.canvasCtx)
				}
			}, 300)
		})
	}

	private setCanvasElementRect(rect: { [key: string]: any } = {}): void {
		const canvasRect = { ...this.config.canvasRect, ...rect }
		this.canvasElement.tabIndex = 0
		this.canvasElement.width = canvasRect.width
		this.canvasElement.height = canvasRect.height
		this.offScreen.cacheCanvasElement.width = canvasRect.width
		this.offScreen.cacheCanvasElement.height = canvasRect.height
	}

	private initToolState(): TSceneToolState {
		const paintBrushState: TCanvasBrushSetting = { ...DEFAULT_BRUSH_CONFIG }
		return {
			paintBrushState,
			smooth: false,
		}
	}

	private initTools(): TSceneTools {
		const boxSelector: BoxSelectTool = new BoxSelectTool(0, 0, 0, 0)
		return {
			boxSelector,
		}
	}

	private initMouseState(): TSceneMouseState {
		return {
			x: -1,
			y: -1,
			targetOffsetX: 0,
			targetOffsetY: 0,
			selectedIndexs: [],
			down: false,
			pointTarget: null,
			toolTarget: null,
			isMove: false,
		}
	}

	private initKeyboardState(): TSceneKeyboardState {
		return {
			keys: [],
		}
	}

	private createCanvasRect(): TDOMClientRect {
		const domRect = this.canvasElement.getBoundingClientRect()
		return domRect.toJSON()
	}

	private createOffScreenCanvas(): TSceneoffScreen {
		const cacheCanvasElement: HTMLCanvasElement = document.createElement('canvas')
		const offScreen: TSceneoffScreen = {
			cacheCanvasElement,
			cacheCanvasCtx: cacheCanvasElement.getContext('2d'),
		}
		/*
            测试 
         */
		// const tc1 = document.getElementById(`t_c_1`)
		// tc1 && (() => { tc1.innerHTML = '' })()
		// tc1 && (() => { tc1.appendChild(offScreen.cacheCanvasElement) })()
		return offScreen
	}

	private continuedRender(): void {
		window.requestAnimationFrame(() => {
			if (!this.config.dirty) {
				this.continuedRender()
				return
			}
			this.clearCanvas(this.canvasCtx)
			/* 读取缓存画布图像并绘制输出 */
			this.paintWith(this.canvasCtx, this.offScreen.cacheCanvasElement)
			if (this.mouseState.toolTarget) {
				this.mouseState.toolTarget.draw(this.canvasCtx)
			}
			if (this.mouseState.pointTarget) {
				this.mouseState.pointTarget.draw(this.canvasCtx)
			}
			for (let i = this.mouseState.selectedIndexs.length - 1; i >= 0; i--) {
				const geometry = this.geometries[this.mouseState.selectedIndexs[i]]
				// if (geometry === this.mouseState.pointTarget) {
				//     continue
				// }
				geometry.draw(this.canvasCtx)
			}
			this.continuedRender()
		})
	}

	private rerenderWith(ctx: CanvasRenderingContext2D, geometries: any[] = []): void {
		const _geometries = geometries.length ? geometries : this.geometries
		this.clearCanvas(ctx)
		for (let i = 0; i < _geometries.length; i++) {
			_geometries[i].draw(ctx)
		}
	}

	public initScene(): void {
		this.bindWindowResizeEvent()
		this.offScreen = this.createOffScreenCanvas()
		this.config = {
			state: ECanvasState.DRAWING,
			canvasRect: this.createCanvasRect(),
			dirty: false,
			reDrawByResizeTimer: null,
		}
		this.toolState = this.initToolState()
		this.tools = this.initTools()
		this.mouseState = this.initMouseState()
		this.keyboardState = this.initKeyboardState()
		this.setCanvasElementRect()
		this.continuedRender()
	}

	public rerender(): void {
		this.rerenderWith(this.offScreen.cacheCanvasCtx)
		this.rerenderWith(this.canvasCtx)
	}

	public getToolState(): TSceneToolState {
		return JSON.parse(JSON.stringify(this.toolState))
	}

	public setToolState(toolState: TSceneToolState): void {
		this.toolState = JSON.parse(JSON.stringify(toolState))
	}

	public setGeometryConstructor(geometryConstructor: any): void {
		this.geometryConstructor = geometryConstructor
	}

	public toggleStateToDrawing(): void {
		this.config.state = ECanvasState.DRAWING
	}

	public toggleStateToSelect(): void {
		this.config.state = ECanvasState.SELECT
	}

	public clearAllGeometries(): void {
		this.geometries = []
	}

	public removeGeometry(index: number): void {
		if (String(+index) === 'NaN' || index < 0) {
			return
		}
		this.geometries.splice(index, 1)
	}

	public addGeometry(geometry: TGeometryType): void {
		this.geometries.push(geometry)
	}

	public pushGeometries(geometries: Array<TGeometryType>): void {
		geometries.forEach(item => {
			this.geometries.push(item)
		})
	}

	public clearCanvas(ctx: CanvasRenderingContext2D): void {
		ctx.clearRect(0, 0, this.config.canvasRect.width, this.config.canvasRect.height)
	}

	public paintWith(ctx: CanvasRenderingContext2D, sourceCanvas: HTMLCanvasElement, x = 0, y = 0): void {
		ctx.drawImage(sourceCanvas, x, y, this.config.canvasRect.width, this.config.canvasRect.height)
	}

	public findClickedTarget(x: number, y: number): TSceneClickFoundRes {
		let geometryTarget = null
		let geometryTargetIndex = -1
		for (let i = this.geometries.length - 1; i >= 0; i--) {
			if (this.geometries[i].choose(x, y) && !geometryTarget) {
				geometryTarget = this.geometries[i]
				geometryTargetIndex = i
				break
			}
		}
		return {
			geometryTarget,
			geometryTargetIndex,
		}
	}
}
