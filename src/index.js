import Cycle from '@cycle/core';
import {makeDOMDriver} from '@cycle/dom';
import intent from './intent';
import model from './model';
import view from './view';
import labeledSlider from './widgets/labeled-slider';

Cycle.run(
  ({ DOM }) => {
    return { DOM: view(model(intent(DOM))) };
  },
  {
    DOM: makeDOMDriver('#app', {
      'labeled-slider': labeledSlider
    })
  }
);
