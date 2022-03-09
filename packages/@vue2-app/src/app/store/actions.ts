import { MutationNamesEnum } from './mutations'

export type TActionCommit = {
	commit: Function
}

export enum ActionNamesEnum {
	UPDATE_GLOBAL_UUID_ACTION = 'UPDATE_GLOBAL_UUID_ACTION',
}

export const actions = {
	async [ActionNamesEnum.UPDATE_GLOBAL_UUID_ACTION]({ commit }: TActionCommit, data: any): Promise<any> {
		return commit(MutationNamesEnum.UPDAT_GLOBAL_UUID, data)
	},
}
