import {Rx} from '@cycle/core';

export default function(actions) {
  return Rx.Observable.combineLatest(
    actions.changeHeight.startWith(170),
    actions.changeWeight.startWith(70),
    actions.toggle.startWith(false),
    (height, weight, toggled) =>
      ({ height, weight, toggled })
  );
}
