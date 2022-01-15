import { GeometryBase, TOffset } from './Geometry.Base'

export class Circle extends GeometryBase {
	private x: number
	private y: number
	private r: number
	constructor(x: number, y: number, r: number = 0) {
		super()
		this.x = x
		this.y = y
		this.r = r
	}

	public setShapeParameter(x: number, y: number): void {
		this.r = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2))
	}

	public moveDist(distX: number, distY: number): void {
		this.x += distX
		this.y += distY
	}

	public getOffset(x: number, y: number): TOffset {
		return {
			distX: x - this.x,
			distY: y - this.y,
		}
	}

	public choose(x: number, y: number): boolean {
		return Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2) < Math.pow(this.r, 2)
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		const brushConfig = this.highlight ? this.config.hightlight : this.config.normal
		ctx.beginPath()
		ctx.fillStyle = brushConfig.fillStyle
		ctx.strokeStyle = brushConfig.strokeStyle
		ctx.lineWidth = brushConfig.lineWidth
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
		ctx.stroke()
		ctx.fill()
		ctx.closePath()
	}

	validate(): boolean {
		return this.r >= 5
	}
}
