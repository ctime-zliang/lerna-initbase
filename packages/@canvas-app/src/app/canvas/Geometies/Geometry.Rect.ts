import { GeometryBase } from './Geometry.Base'

export class Rect extends GeometryBase {
	private x: number
	private y: number
	private w: number
	private h: number
	constructor(x: number, y: number, w: number, h: number) {
		super()
		this.x = x
		this.y = y
		this.w = w
		this.h = h
	}

	public setShapeParameter(x: number, y: number): void {
		this.w = x - this.x
		this.h = y - this.y
	}

	public moveDist(distX: number, distY: number): void {
		this.x += distX
		this.y += distY
	}

	public choose(x: number, y: number): boolean {
		const absoluteMiddleX = this.x + this.w / 2
		const absoluteMiddleY = this.y + this.h / 2
		return Math.abs(x - absoluteMiddleX) < Math.abs(this.w / 2) && Math.abs(y - absoluteMiddleY) < Math.abs(this.h / 2)
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		const brushConfig = this.highlight ? this.config.hightlight : this.config.normal
		ctx.beginPath()
		ctx.fillStyle = brushConfig.fillStyle
		ctx.strokeStyle = brushConfig.strokeStyle
		ctx.lineWidth = brushConfig.lineWidth
		ctx.rect(this.x, this.y, this.w, this.h)
		ctx.stroke()
		ctx.fill()
		ctx.closePath()
	}

	public validate() {
		return Math.abs(this.w) >= 5 && Math.abs(this.h) >= 5
	}
}
