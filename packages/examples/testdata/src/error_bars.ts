// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
import { parseScene } from '@gog/scenegraph'
import { SGMark } from '@gog/scenegraph-interfaces'
const data = require('../resources/error_bars.json')

export const scenegraph = parseScene(data)
export const title = 'Error Bars'
export const dimensions = {
	height: 400,
	width: 400,
	origin: [85, 19] as [number, number],
}