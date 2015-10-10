import {Rx} from '@cycle/core';
import height from './models/height';
import weight from './models/weight';
import toggled from './models/toggled';
import requests from './models/requests';
import posts from './models/posts';

export default function(actions) {
  return Rx.Observable.combineLatest(
    height(actions),
    weight(actions),
    toggled(actions),
    requests(actions),
    posts(actions),
    (...args) => Object.assign(...args)
  );
}
