import { Rx } from '@cycle/core';
import { h } from '@cycle/dom';

export default function({ DOM, props }) {
  function intent(DOM) {
    return {
      changeValue$: DOM.select('.slider').events('input')
        .map(e => e.target.value)
    };
  }

  function model(props, actions) {
    let initialValue$ = props.get('initial').first();
    let value$ = initialValue$.concat(actions.changeValue$);
    let props$ = props.getAll();
    return Rx.Observable.combineLatest(props$, value$, (props, value) => {
      return { props, value };
    })
  }

  function view(state$) {
    return state$.map(({ props, value }) => {
      let { label, unit, min, max } = props;
      return h('div.labeled-slider', [
        h('span.label', [label + ' ' + value + unit]),
        h('input.slider', { type: 'range', min, max, value })
      ]);
    });
  }

  let actions = intent(DOM);
  return {
    DOM: view(model(props, actions)),
    events: {
      newValue: actions.changeValue$
    }
  };
}
