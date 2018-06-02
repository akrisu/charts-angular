[![Build Status](https://travis-ci.org/akrisu/charts-angular.svg?branch=master)](https://travis-ci.org/akrisu/charts-angular)
# Charts

## Setup
- Make sure you have installed `node` and `npm`
- Install project dependencies using `npm install` command
## Development
- `npm start` to run dev server
- `npm test` to run tests

## Build
- `npm run build` to build production version

## Used libraries
- Angular - the JS framework I'm most experienced in
- ngrx - redux-based state management library for Angular. It's easy to maintain and control application by separating data layer.
- ngx-translate - Powerful library for i18n
- chart.js - Well documented and widely used library for creating various type of charts in js
- ramda - library with helpers for managing and processing data in immutable way
- rxjs - library for managing async data flow through streams which implement observer pattern

## Notes
Due to problems with responsiveness of chart.js charts, I decided to support only 2 responsive breakpoints. I've found a couple of issues with that but had no time to dive so deep.

Summary calculations are taken from the chart data so the value is different than the provided one.

Markers on the chart legend depends on the border and fill colours so they're a bit different. If the client would demand 1:1 UI probably should be used more advanced library.

Also, I've found that the label of X axis in Installations chart describes weeks, but the description of the chart describes days. I treated these charts simillary so I've changed the small description above the chart.
