const EVENT_NS = {
	DRAW_START: 'DRAW_START',
	DRAW_DOING: 'DRAW_DOING',
	DRAW_FINISHED: 'DRAW_FINISHED',
	SELECT: 'SELECT',
	CANCEL_SELECT: 'CANCEL_SELECT',
	DELETE_ONE: 'DELETE_ONE',
}

export default class Events {
	events: { [key: string]: any }
	constructor() {
		this.events = {}
	}

	on(name: string, callback: Function) {
		if (typeof name !== 'string' || !name || typeof callback !== 'function') {
			return
		}
		if (!this.events[name]) {
			this.events[name] = []
		}
		this.events[name].push(callback)
	}

	emit(name: string) {
		if (!arguments.length || typeof name !== 'string' || !this.events[name]) {
			return
		}
		const params = Array.from(arguments).splice(1)
		this.events[name].forEach((item: Function, index: number) => {
			item(...params)
		})
	}
}
