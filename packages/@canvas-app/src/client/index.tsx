import React from 'react'
import ReactDOM from 'react-dom'
import App from '../app'

function renderReactApp() {
	ReactDOM.render(<App />, document.getElementById('app'))
}

export async function main() {
	renderReactApp()
	return true
}

main()
