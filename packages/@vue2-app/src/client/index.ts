import Vue from 'vue'
import Store from '../app/store'
import App from '../app/App.vue'

const init = (): void => {
	new Vue({
		el: '#app',
		store: Store,
		render: (h: any) => h(App),
	})
}

init()
