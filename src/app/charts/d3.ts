/**
* This file brought from './ngrx-charts/src/d3.ts' example. It is the way how they optimizing the d3 imports.
* d3 is quite huge library so we do not want to import everything like 'import * as d3 from 'd3''
* Use this file to add any more required imports variables.
*/

/**
 * TODO consider to do something similar with rxjs operators and move the files in to separate folder e.g 'imports'
 */

/**
 *  As we use 'require' only here so we just declaring it like a variable to make TS compiler happy.
*/
declare var require: any;

const array = require('d3-array');
const brush = require('d3-brush');
const color = require('d3-color');
const force = require('d3-force');
const format = require('d3-format');
const interpolate = require('d3-interpolate');
const scales = require('d3-scale');
const selection = require('d3-selection');
const shape = require('d3-shape');
const hierarchy = require('d3-hierarchy');
const tInterval = require('d3-time');
const tFormat = require('d3-time-format');

export default {
  arc: shape.arc,
  area: shape.area,
  brush: brush.brush,
  brushX: brush.brushX,
  brushY: brush.brushY,
  event: selection.event,
  extent: array.extent,
  forceCollide: force.forceCollide,
  forceLink: force.forceLink,
  forceManyBody: force.forceManyBody,
  forceSimulation: force.forceSimulation,
  forceX: force.forceX,
  forceY: force.forceY,
  format: format.format,
  interpolate: interpolate.interpolate,
  line: shape.line,
  max: array.max,
  min: array.min,
  mouse: selection.mouse,
  pie: shape.pie,
  range: array.range,
  rgb: color.rgb,
  selection,
  select: selection.select,
  selectAll: selection.selectAll,
  scaleBand: scales.scaleBand,
  scaleLinear: scales.scaleLinear,
  scaleOrdinal: scales.scaleOrdinal,
  scalePoint: scales.scalePoint,
  scaleQuantile: scales.scaleQuantile,
  scaleTime: scales.scaleTime,
  shape,
  treemap: hierarchy.treemap,
  stratify: hierarchy.stratify,
  timeFormat: tFormat.timeFormat,
  timeParse: tFormat.timeParse,
  timeHour: tInterval.timeHour
};
