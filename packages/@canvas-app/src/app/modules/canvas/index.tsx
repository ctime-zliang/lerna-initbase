import React, { useEffect } from 'react'
import './index.less'
import { CanvasContoller } from '@/app/canvas/Scene/CanvasController'
import { Circle } from '@/app/canvas/Geometies/Geometry.Circle'
import { getRandom } from '@/app/canvas/utils/utils'

function createGeometries() {
	const arr = []
	const len = 500
	for (let i = 0; i < len; i++) {
		arr.push(new Circle(getRandom(100, 1000), getRandom(100, 400), getRandom(50, 80)))
		// arr.push(new Circle((i + 1) * 120, 100, (i + 1) + 50))
	}
	return arr
}

function Canvas() {
	useEffect(() => {
		let canvasElement: any = document.querySelector('canvas')
		if (canvasElement) {
			const canvasContoller = new CanvasContoller(canvasElement)
			canvasContoller.init()
			canvasContoller.setGeometryConstructor(Circle)
			canvasContoller.toggleStateToSelect()
			console.log(canvasContoller)

			window.setTimeout(() => {
				canvasContoller.clearAllGeometries()
				canvasContoller.pushGeometries(createGeometries())
				canvasContoller.rerender()
			})
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
