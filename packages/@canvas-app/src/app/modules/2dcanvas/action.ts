import d2canvas, { GeoCanvas } from '../../../../build/2dcanvas'
import { DRAW_GEOMETRY, DRAW_MODE } from './config'

export const initCanvasControllerCase = (canvasElement: HTMLCanvasElement, ref: any) => {
	ref.current = new GeoCanvas(canvasElement)
	ref.current.init()
	ref.current.rerender()
	ref.current.setGeometryConstructor(d2canvas.Geometry.Rect)
	console.log(ref.current)
	console.log(ref.current.getPixCanvasData())
	//@ts-ignore
	window.drawCanvas = ref.current
}

export const setDrawModeAction = (canvasContoller: GeoCanvas, value: string, setState: (v: any) => void) => {
	if (!canvasContoller) {
		return
	}
	switch (value) {
		case DRAW_MODE.DRAW: {
			setState(value)
			canvasContoller.toggleStateToDrawing()
			break
		}
		case DRAW_MODE.SELECT: {
			setState(value)
			canvasContoller.toggleStateToSelect()
			break
		}
	}
}

export const setDrawGeometryAction = (canvasContoller: GeoCanvas, value: string, setState: (v: any) => void) => {
	if (!canvasContoller) {
		return
	}
	switch (value) {
		case DRAW_GEOMETRY.CIRCLE: {
			setState(value)
			canvasContoller.setGeometryConstructor(d2canvas.Geometry.Circle)
			break
		}
		case DRAW_GEOMETRY.RECT: {
			setState(value)
			canvasContoller.setGeometryConstructor(d2canvas.Geometry.Rect)
			break
		}
		case DRAW_GEOMETRY.LINE: {
			setState(value)
			canvasContoller.setGeometryConstructor(d2canvas.Geometry.Line)
			break
		}
	}
}
