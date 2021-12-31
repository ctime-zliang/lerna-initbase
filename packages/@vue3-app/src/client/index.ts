import { createApp } from 'vue'
import App from '../app/App.vue'

const init = () => {
	const app = createApp(App)
	app.mount('#app')
}

init()
