import {h} from '@cycle/dom';

export default function(stateStream) {
  return stateStream.map(toggled =>
    h('div', [
      h('input', { type: 'checkbox' }),
      'Toggle me',
      h('p', toggled ? 'ON': 'off')
    ])
  );
}
