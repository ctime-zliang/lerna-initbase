import d2canvas, { GeoCanvas } from '../../../../build/2dcanvas'
import { DRAW_GEOMETRY, DRAW_MODE } from '../modules/main/config'

export const initCanvasControllerCase = (canvasElement: HTMLCanvasElement) => {
	const geoCanvas: GeoCanvas = new GeoCanvas(canvasElement)
	geoCanvas.init()
	geoCanvas.rerender()
	geoCanvas.setGeometryConstructor(d2canvas.Geometry.Rect)
	console.log(geoCanvas)
	console.log(geoCanvas.getPixCanvasData())
	//@ts-ignore
	window.drawCanvas = ref.current
}

export const setDrawModeAction = (canvasContoller: GeoCanvas, value: string) => {
	switch (value) {
		case DRAW_MODE.DRAW: {
			canvasContoller.toggleStateToDrawing()
			break
		}
		case DRAW_MODE.SELECT: {
			canvasContoller.toggleStateToSelect()
			break
		}
	}
}

export const setDrawGeometryAction = (canvasContoller: GeoCanvas, value: string) => {
	switch (value) {
		case DRAW_GEOMETRY.CIRCLE: {
			canvasContoller.setGeometryConstructor(d2canvas.Geometry.Circle)
			break
		}
		case DRAW_GEOMETRY.RECT: {
			canvasContoller.setGeometryConstructor(d2canvas.Geometry.Rect)
			break
		}
		case DRAW_GEOMETRY.LINE: {
			canvasContoller.setGeometryConstructor(d2canvas.Geometry.Line)
			break
		}
	}
}
