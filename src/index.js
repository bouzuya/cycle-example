import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import {makeFetcherDriver} from '@r7kamura/cycle-fetcher-driver';
import intent from './intent';
import model from './model';
import view from './view';
import labeledSlider from './widgets/labeled-slider';

Cycle.run(
  ((responses) => view(model(intent(responses)))),
  {
    DOM: makeDOMDriver('#app', {
      'labeled-slider': labeledSlider
    }),
    HTTP: makeFetcherDriver()
  }
);
