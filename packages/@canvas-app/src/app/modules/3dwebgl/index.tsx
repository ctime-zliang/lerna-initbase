import React, { useEffect, useRef } from 'react'
import styles from './index.module.less'

function Canvas(props: any) {
	const canvasRef = useRef<null>(null)
	useEffect(() => {
		let canvasElement: any = canvasRef.current
		if (canvasElement) {
			/* ... */
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
