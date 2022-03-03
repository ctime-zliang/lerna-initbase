export enum EEVENT_NAMESPANCE {
	DRAW_START = 'DRAW_START',
	DRAW_DOING = 'DRAW_DOING',
	DRAW_FINISHED = 'DRAW_FINISHED',
	SELECT = 'SELECT',
	CANCEL_SELECT = 'CANCEL_SELECT',
	DELETE_ONE = 'DELETE_ONE',
}

export default class EventsBus {
	private events: { [key: string]: any }
	constructor() {
		this.events = {}
	}

	public on(name: string, callback: Function): void {
		if (typeof name !== 'string' || !name || typeof callback !== 'function') {
			return
		}
		if (!this.events[name]) {
			this.events[name] = []
		}
		this.events[name].push(callback)
	}

	public emit(name: string): void {
		if (!arguments.length || typeof name !== 'string' || !this.events[name]) {
			return
		}
		const params: any = Array.from(arguments).splice(1)
		this.events[name].forEach((item: Function, index: number) => {
			item(...params)
		})
	}
}
