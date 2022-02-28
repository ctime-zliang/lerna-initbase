import React, { useEffect, useRef } from 'react'
import styles from './index.module.less'
import d2canvas from '../../../../build/2dcanvas'

function Canvas(props: any) {
	const canvasRef = useRef<null>(null)
	useEffect(() => {
		let canvasElement: any = canvasRef.current
		if (canvasElement) {
			const canvasContoller = new d2canvas.CanvasContoller(canvasElement)
			canvasContoller.init()
			canvasContoller.addGeometry(new d2canvas.Geometry.Circle(200, 200, 75))
			canvasContoller.addGeometry(new d2canvas.Geometry.Rect(150, 90, 100, 100))
			canvasContoller.addGeometry(new d2canvas.Geometry.Rect(350, 90, 100, 100))
			canvasContoller.setGeometryConstructor(d2canvas.Geometry.Line)
			canvasContoller.toggleStateToSelect()
			canvasContoller.rerender()
			console.log(canvasContoller)
		}
	}, [])
	return (
		<section>
			<div className={styles['canvas-container']}>
				<div className={styles['canvas-content-wrapper']}>
					<canvas ref={canvasRef}></canvas>
				</div>
			</div>
			<div
				style={{
					position: 'absolute',
					top: 0,
					right: 0,
					transform: 'scale(0.30)',
					transformOrigin: 'right top',
					backgroundColor: 'white',
					border: '1px solid #666666',
				}}
			></div>
		</section>
	)
}

export default React.memo(Canvas)
