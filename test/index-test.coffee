assert = require 'power-assert'
{ Rx } = require '@cycle/core'

describe 'Rx.Observable', ->
  # Rx.Observable.just ( alias: return )
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/return.md
  # Rx.Observable.prototype.subscribe
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribe.md
  it 'just -> subscribe', (done) ->
    observable = Rx.Observable.just('foo')
    observable.subscribe (s) ->
      assert s is 'foo'
      done()
    null

  # Rx.Observable.prototype.map ( alias: select )
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/select.md
  it 'just -> map -> subscribe', (done) ->
    observable = Rx.Observable.just('foo').map (s) -> s.length
    observable.subscribe (s) ->
      assert s is 3
      done()
    null

  # Rx.Observable.from
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/from.md
  # Rx.Observable.prototype.reduce
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/reduce.md
  it 'from -> reduce -> subscribe', (done) ->
    observable = Rx.Observable
      .from ['foo', 'bar', 'baz']
      .reduce (s, i) -> s + i
    observable.subscribe (s) ->
      assert s is 'foobarbaz'
      done()
    null

  # Rx.Observable.repeat
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/repeat.md
  # Rx.Observable.prototype.take
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/take.md
  it 'repeat -> take -> reduce -> subscribe', (done) ->
    Rx.Observable
      .repeat 1
      .take 10
      .reduce ((s, i) -> s + i), 0
      .subscribe (i) ->
        assert i is 10
        done()
    null

  it 'repeat -> reduce -> subscribe', (done) ->
    Rx.Observable
      .repeat 1, 20 # value, repeatCount
      .reduce ((s, i) -> s + i), 0
      .subscribe (i) ->
        assert i is 20
        done()
    null

  # Rx.Observable.create
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md
  it 'create -> subscribe', (done) ->
    Rx.Observable
      .create (observer) ->
        observer.onNext 1
        observer.onCompleted()
        ->
          # dispose ???
      .subscribe (i) ->
        assert i is 1
        done()
    null

  # Rx.Observable.defer
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/defer.md
  it 'defer -> subscribe', (done) ->
    Rx.Observable
      .defer ->
        Rx.Observable.just 1
      .subscribe (i) ->
        assert i is 1
        done()
    null

  # Rx.Observable.interval
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/interval.md
  it 'interval -> take -> reduce -> subscribe', (done) ->
    Rx.Observable
      .interval 100
      .take 3
      .reduce ((a, i) -> a.concat [i]), []
      .subscribe (i) -> # call after about 300ms ( 100ms * 3 )
        assert.deepEqual i, [0, 1, 2]
        done()
    null

  # Rx.Observable.timer
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/timer.md
  it 'timer -> take -> reduce -> subscribe', (done) ->
    Rx.Observable
      .timer 100, 10 # wait 100ms, every 10ms
      .take 3
      .reduce ((a, i) -> a.concat [i]), []
      .subscribe (i) -> # call after about 130ms (100ms + 10ms * 3)
        assert.deepEqual i, [0, 1, 2]
        done()
    null


  # Rx.Observable.empty
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/empty.md
  # Rx.Observable.subscribeOnCompleted
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/subscribeoncompleted.md
  it 'empty -> subscribeOnCompleted', (done) ->
    Rx.Observable
      .empty()
      .subscribeOnCompleted ->
        done()
    null

  # Rx.Observable.never
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/never.md
  it 'never -> subscribe', (done) ->
    Rx.Observable
      .never()
      .subscribe ->
        done new Error()
      , ->
        done new Error()
      , ->
        done new Error()
    done()
    null

  # Rx.Observable.throw
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/throw.md
  it 'throw -> subscribe', (done) ->
    Rx.Observable
      .throw(new Error('hoge'))
      .subscribe ->
        assert.fail()
      , (e) ->
        assert e.message is 'hoge'
        done()
      , ->
        assert.fail()
    null

  # Rx.Observable.range
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/range.md
  # Rx.Observable.prototype.filter
  #   https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/where.md
  it 'range -> filter -> subscribe', ->
    Rx.Observable
      .range 1, 10
      .filter (i) ->
        i % 2 is 0
      .reduce ((a, i) -> a.concat([i])), []
      .subscribe (a) ->
        assert.deepEqual a, [2, 4, 6, 8, 10]
