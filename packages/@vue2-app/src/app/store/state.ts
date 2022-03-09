import { v4 as uuidv4 } from 'uuid'

export type TState = {
	timeStamp: number
	globalUuid: string
}

export const mapStateNames: string[] = ['timeStamp', 'globalUuid']

export const state: TState = {
	timeStamp: new Date().getTime(),
	globalUuid: uuidv4(),
}
