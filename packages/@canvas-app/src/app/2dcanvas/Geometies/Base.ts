import { TCanvasDrawSetting } from '../types/canvas.types'

export type TGeometryBaseConfig = {
	normal: TCanvasDrawSetting
	hightlight: TCanvasDrawSetting
}

export const DEFAULT_NORMAL_DRAW_SETTING: TCanvasDrawSetting = {
	fillStyle: 'rgba(255, 255, 0, 1)',
	lineWidth: 1,
	strokeStyle: 'rgba(0, 0, 0, 1)',
}
export const DEFAULT_HIGHLIGHT_DRAW_SETTING: TCanvasDrawSetting = {
	strokeStyle: 'rgba(255, 0, 0, 255)',
	lineWidth: 5,
	fillStyle: 'rgba(255, 255, 255, 1)',
}

export class GeometryBase {
	private config: TGeometryBaseConfig
	private highlight: boolean
	private checked: boolean
	private index: number
	constructor() {
		this.config = {
			normal: { ...DEFAULT_NORMAL_DRAW_SETTING },
			hightlight: { ...DEFAULT_NORMAL_DRAW_SETTING, ...DEFAULT_HIGHLIGHT_DRAW_SETTING },
		}
		this.highlight = false
		this.checked = false
		this.index = -1
	}

	public setPaintStyle(options: TCanvasDrawSetting): void {
		this.config.normal = { ...this.config.normal, ...options }
	}

	public setShapeParameter(x: number, y: number): void {
		/* ... */
	}

	public setAssistSetting(options: any): void {
		/* ... */
	}

	public moveTo(x: number, y: number): void {
		/* ... */
	}

	public moveDist(distX: number, distY: number): void {
		/* ... */
	}

	public choose(x: number, y: number): void {
		/* ... */
	}

	public getOffset(x: number, y: number): void {
		/* ... */
	}

	public draw(ctx: CanvasRenderingContext2D): void {
		/* ... */
	}

	public validate(): void {
		/* ... */
	}

	public getConfig(): TGeometryBaseConfig {
		return this.config
	}

	public setIndex(index: number = -1): void {
		this.index = index
	}

	public getIndex(): number {
		return this.index
	}

	public setChecked(): void {
		this.checked = true
	}

	public setUnChecked(): void {
		this.checked = false
	}

	public isChecked(): boolean {
		return this.checked
	}

	public setHighlight(): void {
		this.highlight = true
	}

	public setUnHighlight(): void {
		this.highlight = false
	}

	public isHighlight(): boolean {
		return this.highlight
	}
}
