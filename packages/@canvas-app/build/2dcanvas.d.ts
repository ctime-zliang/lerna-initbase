// Generated by dts-bundle v0.7.3

const _default: {
	CanvasContoller: typeof CanvasContoller
	Geometry: {
		Circle: typeof Circle
		Line: typeof Line
		Rect: typeof Rect
	}
}
export default _default

export class CanvasContoller extends Scene {
	constructor(canvasElement: HTMLCanvasElement)
	init(): void
}

export class Circle extends GeometryBase {
	constructor(x: number, y: number, r?: number)
	setShapeParameter(x: number, y: number): void
	moveDist(distX: number, distY: number): void
	getOffset(x: number, y: number): TGeometryOffset
	choose(x: number, y: number): boolean
	draw(ctx: CanvasRenderingContext2D): void
	validate(): boolean
}

export class Line extends GeometryBase {
	constructor(x: number, y: number)
	setShapeParameter(x: number, y: number): void
	setAssistSetting(setting: TGeometryAssistSetting): void
	moveTo(x: number, y: number): void
	moveDist(distX: number, distY: number): void
	choose(x: number, y: number): boolean
	getOffset(x: number, y: number): TGeometryOffset
	draw(ctx: CanvasRenderingContext2D): void
	validate(): boolean
}

export class Rect extends GeometryBase {
	constructor(x: number, y: number, w: number, h: number)
	setShapeParameter(x: number, y: number): void
	moveDist(distX: number, distY: number): void
	getOffset(x: number, y: number): TGeometryOffset
	choose(x: number, y: number): boolean
	draw(ctx: CanvasRenderingContext2D): void
	validate(): boolean
}

export enum ECanvasState {
	DRAWING = 'DRAWING',
	SELECT = 'SELECT',
}
export type TSceneToolState = {
	paintBrushState: TCanvasDrawSetting
	smooth: boolean
}
export type TSceneTools = {
	boxSelector: BoxSelectTool
}
export type TSceneConfig = {
	state: ECanvasState.DRAWING | ECanvasState.SELECT
	canvasRect: TDOMClientRectJSON
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
export const DEFAULT_CANVAS_DRAW_SETTING: TCanvasDrawSetting
export class Scene {
	protected geometryConstructor: TGeometryType
	protected geometries: Array<TGeometryType>
	protected config: TSceneConfig
	protected tools: TSceneTools
	protected toolState: TSceneToolState
	protected mouseState: TSceneMouseState
	protected keyboardState: TSceneKeyboardState
	protected offScreen: TSceneoffScreen
	protected canvasElement: HTMLCanvasElement
	protected canvasCtx: CanvasRenderingContext2D
	constructor(canvasElement: HTMLCanvasElement)
	initScene(): void
	getPixCanvasData(): TCanvasImageDataResult
	rerender(): void
	getToolState(): TSceneToolState
	setToolState(toolState: TSceneToolState): void
	setGeometryConstructor(geometryConstructor: any): void
	toggleStateToDrawing(): void
	toggleStateToSelect(): void
	clearAllGeometries(): void
	removeGeometry(index: number): void
	addGeometry(geometry: TGeometryType): void
	pushGeometries(geometries: Array<TGeometryType>): void
	clearCanvas(ctx: CanvasRenderingContext2D): void
	paintWith(ctx: CanvasRenderingContext2D, sourceCanvas: HTMLCanvasElement, x?: number, y?: number): void
	findClickedTarget(x: number, y: number): TSceneClickFoundRes
}

export type TCanvasDrawSetting = {
	fillStyle: string
	lineWidth: number
	strokeStyle: string
}
/************************ ************************/
export type TPosition2D = {
	x: number
	y: number
}
/************************ ************************/
export type TGeometryOffset = {
	distX: number
	distY: number
}
/************************ ************************/
export type TGeometryType = Circle | Line | Rect | any
/************************ ************************/
export type TGeometryAssistSetting = {
	smooth?: boolean
}
/************************ ************************/
export type TGeometryConfig = {
	normal: TCanvasDrawSetting
	highlight: TCanvasDrawSetting
}
/************************ ************************/
export type TCanvasImageDataResult = {
	data: any
	width?: number
	height?: number
	colorSpace?: string
	storageFormat?: string
}

export const DEFAULT_NORMAL_DRAW_SETTING: TCanvasDrawSetting
export const DEFAULT_HIGHLIGHT_DRAW_SETTING: TCanvasDrawSetting
export class GeometryBase {
	constructor()
	setNormalPaintStyle(options: TCanvasDrawSetting): void
	setHighlightPaintStyle(options: TCanvasDrawSetting): void
	getPaintStyle(): TCanvasDrawSetting
	setShapeParameter(x: number, y: number): void
	setAssistSetting(options: any): void
	moveTo(x: number, y: number): void
	moveDist(distX: number, distY: number): void
	choose(x: number, y: number): void
	getOffset(x: number, y: number): void
	draw(ctx: CanvasRenderingContext2D): void
	validate(): void
	setIndex(index?: number): void
	getIndex(): number
	setChecked(): void
	setUnChecked(): void
	isChecked(): boolean
	setHighlight(): void
	setUnHighlight(): void
	isHighlight(): boolean
	setId(id: string): void
	getId(): string | null
}

export class BoxSelectTool {
	constructor(x: number, y: number, w: number, h: number)
	setStartCoordinate(x: number, y: number): void
	restoreStatus(): void
	setShapeParameter(x: number, y: number): void
	draw(ctx: CanvasRenderingContext2D): void
	drawDashRect(ctx: CanvasRenderingContext2D, left: number, top: number, width: number, height: number, step?: number): void
}

export type TDOMClientRectJSON = {
	width: number
	height: number
	x: number
	y: number
	left: number
	top: number
	bottom: number
	right: number
}
export type TDOMClientRect = {
	width: number
	height: number
	x: number
	y: number
	left: number
	top: number
	bottom: number
	right: number
	toJSON: () => TDOMClientRectJSON
}
