import React, { useEffect, useRef, useState } from 'react'
import { Radio } from 'antd'
import styles from './index.module.less'
import { DRAW_GEOMETRY, DRAW_MODE } from './config'
import { initCanvasControllerCase, setDrawGeometryAction, setDrawModeAction } from './action'

function Canvas(props: any) {
	const canvasRef = useRef<null>(null)
	const canvasContoller = useRef<any>(null)
	const [drawMode, setDrawMode] = useState<string>(DRAW_MODE.DRAW)
	const [drawGeometry, setDrawGeometry] = useState<string>(DRAW_GEOMETRY.RECT)

	const _setDrawModeAction = (e: any) => {
		setDrawModeAction(canvasContoller.current, e.target.value, setDrawMode)
	}
	const _setDrawGeometryAction = (e: any) => {
		setDrawGeometryAction(canvasContoller.current, e.target.value, setDrawGeometry)
	}

	useEffect(() => {
		let canvasElement: any = canvasRef.current
		canvasElement && initCanvasControllerCase(canvasElement, canvasContoller)
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
					<Radio.Group onChange={_setDrawModeAction} value={drawMode}>
						<Radio value={DRAW_MODE.DRAW}>{DRAW_MODE.DRAW}</Radio>
						<Radio value={DRAW_MODE.SELECT}>{DRAW_MODE.SELECT}</Radio>
					</Radio.Group>
				</div>
				<div>
					<label>Draw Geometry: </label>
					<Radio.Group onChange={_setDrawGeometryAction} value={drawGeometry}>
						<Radio value={DRAW_GEOMETRY.RECT}>{DRAW_GEOMETRY.RECT}</Radio>
						<Radio value={DRAW_GEOMETRY.LINE}>{DRAW_GEOMETRY.LINE}</Radio>
						<Radio value={DRAW_GEOMETRY.CIRCLE}>{DRAW_GEOMETRY.CIRCLE}</Radio>
					</Radio.Group>
				</div>
			</section>
		</section>
	)
}

export default React.memo(Canvas)
