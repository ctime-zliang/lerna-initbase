import { TState } from './state'

export enum MutationNamesEnum {
	UPDAT_GLOBAL_UUID = 'UPDAT_GLOBAL_UUID',
	UPDAT_TIME_STAMP = 'UPDAT_TIME_STAMP',
}

export const mutations = {
	[MutationNamesEnum.UPDAT_GLOBAL_UUID](state: TState, value: string): void {
		state.globalUuid = value
	},
	[MutationNamesEnum.UPDAT_TIME_STAMP](state: TState, value: number): void {
		state.timeStamp = value
	},
}
