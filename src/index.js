import Cycle from '@cycle/core';
import {makeDOMDriver, h} from '@cycle/dom';

const intent = function(DOM) {
  return {
    toggle: DOM.select('input').events('click').map(e => e.target.checked)
  };
};

const model = function(actions) {
  return actions.toggle.startWith(false);
};

const view = function(stateStream) {
  return stateStream.map(toggled =>
    h('div', [
      h('input', { type: 'checkbox' }),
      'Toggle me',
      h('p', toggled ? 'ON': 'off')
    ])
  );
};

Cycle.run(
  ({ DOM }) => {
    return { DOM: view(model(intent(DOM))) };
  },
  {
    DOM: makeDOMDriver('#app')
  }
);
