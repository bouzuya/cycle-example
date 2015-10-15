import {Rx} from '@cycle/core';
import height from './models/height';
import weight from './models/weight';
import toggled from './models/toggled';
import request from './models/request';
import posts from './models/posts';

export default function(actions) {
  // {
  //   height: Number;
  //   weight: Number;
  //   toggled: boolean;
  //   request: { url: String; method: String };
  //   posts: Array<{ title }>;
  // }
  return Rx.Observable.combineLatest(
    height(actions),
    weight(actions),
    toggled(actions),
    request(actions),
    posts(actions),
    (...args) => Object.assign(...args)
  );
}
