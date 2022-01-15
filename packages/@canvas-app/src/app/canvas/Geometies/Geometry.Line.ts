import { GeometryBase, TOffset } from './Geometry.Base'

type TPosition2D = {
	x: number
	y: number
}

export class Line extends GeometryBase {
	private path: Array<TPosition2D>
	private smooth: boolean
	private lineWidth: number
	private samplingIntervalNumber: number
	constructor(x: number, y: number) {
		super()
		this.path = [{ x, y }]
		this.smooth = false
		this.lineWidth = 10
		this.samplingIntervalNumber = 2
	}

	public setShapeParameter(x: number, y: number): void {
		const lastPoint: TPosition2D = this.path[this.path.length - 1]
		if (Math.abs(lastPoint.x - x) > 1 || Math.abs(lastPoint.y - y) > 1) {
			this.path.push({ x, y })
		}
	}

	public setAssistSetting({ smooth }: { smooth: boolean }): void {
		this.smooth = smooth
	}

	public moveTo(x: number, y: number): void {
		const startPoint = this.path[0]
		const startPointOffsetX = x - startPoint.x
		const startPointOffsetY = y - startPoint.y
		for (let i = 0; i < this.path.length; i++) {
			this.path[i].x += startPointOffsetX
			this.path[i].y += startPointOffsetY
		}
	}

	public moveDist(distX: number, distY: number): void {
		for (let i = 0; i < this.path.length; i++) {
			this.path[i].x += distX
			this.path[i].y += distY
		}
	}

	public choose(x: number, y: number): boolean {
		const round = this.lineWidth > 10 ? Math.pow(this.lineWidth, 2) : 30
		for (let i = 0; i < this.path.length; i++) {
			if (Math.pow(this.path[i].x - x, 2) + Math.pow(this.path[i].y - y, 2) < round) {
				return true
			}
		}
		return false
	}

	public getOffset(x: number, y: number): TOffset {
		return {
			distX: x - this.path[0].x,
			distY: y - this.path[0].y,
		}
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		const brushConfig = this.highlight ? this.config.hightlight : this.config.normal
		ctx.fillStyle = `rgba(0, 0, 0, 0)`
		ctx.strokeStyle = brushConfig.strokeStyle
		ctx.lineWidth = brushConfig.lineWidth
		ctx.lineJoin = 'round'
		/* 
            非平滑曲线
         */
		if (!this.smooth) {
			ctx.beginPath()
			for (let i = 0; i < this.path.length; i++) {
				ctx.lineTo(this.path[i].x, this.path[i].y)
			}
			ctx.stroke()
			ctx.closePath()
			return
		}
		if (this.path.length > 3) {
			ctx.beginPath()
			ctx.moveTo(this.path[0].x, this.path[0].y)
			let i = 1
			// let samplingIntervalNumber = this.path.length >= this.samplingIntervalNumber ? this.samplingIntervalNumber : 1
			for (i = 1; i < this.path.length - 2; i += this.samplingIntervalNumber) {
				if (this.path[i] && this.path[i + 1]) {
					const xc = (this.path[i].x + this.path[i + 1].x) / 2
					const yc = (this.path[i].y + this.path[i + 1].y) / 2
					ctx.quadraticCurveTo(this.path[i].x, this.path[i].y, xc, yc)
				}
			}
			if (i >= this.path.length - 2) {
				i = this.path.length - 2
			}
			ctx.quadraticCurveTo(this.path[i].x, this.path[i].y, this.path[i + 1].x, this.path[i + 1].y)
			ctx.stroke()
			ctx.closePath()
			return
		}
	}

	validate(): boolean {
		return this.path.length >= 5
	}
}
