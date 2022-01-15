export type TOffset = {
	distX: number
	distY: number
}

export type TGeometryDrawSetting = {
	fillStyle: string
	lineWidth: number
	strokeStyle: string
}

export const DEFAULT_ELEMENT_CONFIG: TGeometryDrawSetting = {
	fillStyle: 'rgba(255, 255, 0, 1)',
	lineWidth: 1,
	strokeStyle: 'rgba(0, 0, 0, 1)',
}
export const DEFAULT_HIGHLIGHT_CONFIG: TGeometryDrawSetting = {
	strokeStyle: 'rgba(255, 0, 0, 255)',
	lineWidth: 5,
	fillStyle: 'rgba(255, 255, 255, 1)',
}

export abstract class GeometryBase {
	protected config: {
		normal: TGeometryDrawSetting
		hightlight: TGeometryDrawSetting
	}
	protected highlight: boolean
	protected checked: boolean
	protected index: number
	constructor() {
		this.config = {
			normal: { ...DEFAULT_ELEMENT_CONFIG },
			hightlight: { ...DEFAULT_ELEMENT_CONFIG, ...DEFAULT_HIGHLIGHT_CONFIG },
		}
		this.highlight = false
		this.checked = false
		this.index = -1
	}

	public setPaintStyle(options: TGeometryDrawSetting): void {
		this.config.normal = { ...this.config.normal, ...options }
	}

	public setShapeParameter(x: number, y: number): void {
		/* ... */
	}

	public setAssistSetting(options: any): void {
		/* ... */
	}

	public moveDist(distX: number, distY: number): void {
		/* ... */
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

	public cancelChecked(): void {
		this.checked = false
	}

	public isChecked(): boolean {
		return this.checked
	}

	public setHighlight(): void {
		this.highlight = true
	}

	public cancelHighlight(): void {
		this.highlight = false
	}

	public isHighlight(): boolean {
		return this.highlight
	}
}
