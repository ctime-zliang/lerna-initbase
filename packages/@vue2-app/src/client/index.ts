import Vue from 'vue'
import Store from '../app/store'
import App from '../app/App.vue'

const init = () => {
	new Vue({
		el: '#app',
		store: Store,
		render: h => h(App),
	})
}

init()
