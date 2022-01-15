import React, { useEffect } from 'react'
import './index.less'
import { CanvasContoller } from '../../canvas/Scene/CanvasController'
import { Circle } from '../../canvas/Geometies/Circle'
import { Line } from '../../canvas/Geometies/Line'
import { Rect } from '../../canvas/Geometies/Rect'

function Canvas() {
	useEffect(() => {
		let canvasElement: any = document.querySelector('canvas')
		if (canvasElement) {
			const canvasContoller: CanvasContoller = new CanvasContoller(canvasElement)
			canvasContoller.init()
			canvasContoller.setGeometryConstructor(Line)
			canvasContoller.toggleStateToDrawing()
			console.log(canvasContoller)
		}
	}, [])
	return (
		<section>
			<div id="gCount"></div>
			<div className="canvas-container">
				<div className="canvas-content-wrapper">
					<canvas></canvas>
				</div>
			</div>
			<div
				id="t_c_1"
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
