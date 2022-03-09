import { TState } from './state'

export const mapGetterNames: string[] = ['timeStateGetter', 'globalUuidGetter']

export const getters = {
	timeStateGetter(state: TState): number {
		return state.timeStamp
	},
	globalUuidGetter(state: TState): string {
		return state.globalUuid
	},
}
