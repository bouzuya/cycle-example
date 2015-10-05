import Cycle from '@cycle/core';
import {makeDOMDriver, h} from '@cycle/dom';

let intent = function(DOM) {
  return {
    toggle: DOM.select('input').events('click').map(e => e.target.checked)
  };
};

let model = function(actions) {
  return actions.toggle.startWith(false);
};

let view = function(stateStream) {
  return stateStream.map(toggled =>
    h('div', [
      h('input', { type: 'checkbox' }),
      'Toggle me',
      h('p', toggled ? 'ON': 'off')
    ])
  );
};

let main = function({ DOM }) {
  return { DOM: view(model(intent(DOM))) };
};

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});
