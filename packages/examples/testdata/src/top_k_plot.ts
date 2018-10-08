// Bar Chart Example, captured from https://vega.github.io/vega/examples/bar-chart/

// tslint:disable no-var-requires
declare var require: any
import { parseScene } from '@chart-parts/scenegraph'
const data = require('../resources/top_k_plot.json')

export const scenegraph = parseScene(data)
export const title = 'Top-K Plot'
export const dimensions = {
	height: 450,
	width: 450,
	origin: [90, 19] as [number, number],
}