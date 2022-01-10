import React from 'react'
import Counter from './modules/counter'
// import '../../../../node_modules/antd/dist/antd.css'
import { main } from './canvas/main'

export default function App(props: any) {
	const { name } = props
	return (
		<section className="react-app">
			<div className="wel-wrapper">Hello World {name}</div>
			<div>{main()}</div>
			<Counter />
		</section>
	)
}
