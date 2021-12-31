import { IState } from './state'

export const mapGetterNames: string[] = ['timeStateGetter', 'globalUuidGetter']

export const getters = {
	timeStateGetter(state: IState): number {
		return state.timeStamp
	},
	globalUuidGetter(state: IState): string {
		return state.globalUuid
	},
}
