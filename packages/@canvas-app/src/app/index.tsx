import React from 'react'
import D2Canvas from './modules/2dcanvas'
import D3WebGL from './modules/3dwebgl'
import '../../../../node_modules/antd/dist/antd.css'

export default function App(props: any) {
	return (
		<section className="react-app">
			<D2Canvas />
		</section>
	)
}
