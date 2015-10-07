assert = require 'power-assert'
{ Rx } = require '@cycle/core'
{ mockDOMResponse } = require '@cycle/dom'
changeHeight = require '../../src/intents/change-height'

describe 'intents/change-height', ->
  it 'works', (done) ->
    responses =
      DOM: mockDOMResponse
        '#height':
          'input': Rx.Observable.just(target: { value: '123' })
    action = changeHeight(responses)
    action.first().subscribe (x) ->
      assert x is '123'
      done()
