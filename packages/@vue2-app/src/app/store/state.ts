import { v4 as uuidv4 } from 'uuid'

export interface IState {
	timeStamp: number
	globalUuid: string
}

export const mapStateNames: string[] = ['timeStamp', 'globalUuid']

export const state: IState = {
	timeStamp: new Date().getTime(),
	globalUuid: uuidv4(),
}
