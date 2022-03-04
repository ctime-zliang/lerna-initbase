import React, { useEffect, useRef, useState } from 'react'
import { Radio } from 'antd'
import styles from './index.module.less'
import d2canvas from '../../../../build/2dcanvas'

const DRAW_MODE = {
	SELECT: 'SELECT',
	DRAW: 'DRAW',
}

function Canvas(props: any) {
	const [drawMode, setDrawMode] = useState<string>(DRAW_MODE.DRAW)
	const canvasRef = useRef<null>(null)
	const canvasContoller = useRef<any>(null)

	const setDrawModeAction = (e: any) => {
		if (!canvasContoller.current) {
			return
		}
		const value = e.target.value
		switch (value) {
			case DRAW_MODE.DRAW: {
				setDrawMode(value)
				canvasContoller.current.toggleStateToDrawing()
				break
			}
			case DRAW_MODE.SELECT: {
				setDrawMode(value)
				canvasContoller.current.toggleStateToSelect()
				break
			}
		}
	}

	useEffect(() => {
		let canvasElement: any = canvasRef.current
		if (canvasElement) {
			canvasContoller.current = new d2canvas.CanvasContoller(canvasElement)
			canvasContoller.current.init()
			canvasContoller.current.addGeometry(new d2canvas.Geometry.Circle(200, 200, 75))
			canvasContoller.current.addGeometry(new d2canvas.Geometry.Rect(150, 90, 100, 100))
			canvasContoller.current.addGeometry(new d2canvas.Geometry.Rect(350, 90, 100, 100))
			canvasContoller.current.setGeometryConstructor(d2canvas.Geometry.Line)
			canvasContoller.current.toggleStateToDrawing()
			canvasContoller.current.rerender()
			console.log(canvasContoller.current)
			console.log(canvasContoller.current.getPixCanvasData())
			//@ts-ignore
			window.drawCanvas = canvasContoller.current
		}
	}, [])
	return (
		<section>
			<div className={styles['canvas-container']}>
				<div className={styles['canvas-content-wrapper']}>
					<canvas ref={canvasRef}></canvas>
				</div>
			</div>
			<section className={styles['control-container']}>
				<div>
					<label>Draw Mode: </label>
					<Radio.Group onChange={setDrawModeAction} value={drawMode}>
						<Radio value={DRAW_MODE.DRAW}>{DRAW_MODE.DRAW}</Radio>
						<Radio value={DRAW_MODE.SELECT}>{DRAW_MODE.SELECT}</Radio>
					</Radio.Group>
				</div>
			</section>
		</section>
	)
}

export default React.memo(Canvas)
