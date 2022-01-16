import React from 'react'
import D2Canvas from './modules/2dcanvas'
import D3Canvas from './modules/3dcanvas'
import '../../../../node_modules/antd/dist/antd.css'

export default function App(props: any) {
	return (
		<section className="react-app">
			<D2Canvas />
			<D3Canvas />
		</section>
	)
}
