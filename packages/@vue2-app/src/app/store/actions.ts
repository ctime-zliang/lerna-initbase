import { MutationNamesEnum } from './mutations'

export interface IActionCommit {
	commit: Function
}

export enum ActionNamesEnum {
	UPDATE_GLOBAL_UUID_ACTION = 'UPDATE_GLOBAL_UUID_ACTION',
}

export const actions = {
	async [ActionNamesEnum.UPDATE_GLOBAL_UUID_ACTION]({ commit }: IActionCommit, data: any): Promise<any> {
		return commit(MutationNamesEnum.UPDAT_GLOBAL_UUID, data)
	},
}
