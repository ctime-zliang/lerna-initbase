import { Circle } from '../Geometies/Circle'
import { Line } from '../Geometies/Line'
import { Rect } from '../Geometies/Rect'

export type TGeometryOffset = {
	distX: number
	distY: number
}

export type TGeometryType = Circle | Line | Rect | any
