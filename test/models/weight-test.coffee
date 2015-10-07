assert = require 'power-assert'
{ Rx } = require '@cycle/core'
{ mockDOMResponse } = require '@cycle/dom'
weight = require '../../src/models/weight'

describe 'models/weight', ->
  it 'works', (done) ->
    actions =
      changeWeight: Rx.Observable.just(70)
    state$ = weight(actions)
    state$.first().subscribe (x) ->
      assert x is 70
      done()
