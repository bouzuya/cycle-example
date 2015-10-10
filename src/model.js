import {Rx} from '@cycle/core';
import height from './models/height';
import weight from './models/weight';
import toggled from './models/toggled';

export default function(actions) {
  return Rx.Observable.combineLatest(
    height(actions),
    weight(actions),
    toggled(actions),
    (...args) => Object.assign(...args)
  );
}
