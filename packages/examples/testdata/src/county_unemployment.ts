// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
import { parseScene } from '@gog/scenegraph'
import { SGMark } from '@gog/scenegraph-interfaces'
const data = require('../resources/county_unemployment.json')

export const scenegraph = parseScene(data)
export const title = 'County Unemployment'
export const dimensions = {
	height: 500,
	width: 500,
	origin: [30, 19] as [number, number],
}