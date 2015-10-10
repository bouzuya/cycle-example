import { Rx } from '@cycle/core';

export default function(state$) {
  return state$
    .map(({ requests }) => requests)
    .filter(i => i)
    .map(() => {
      return {
        url: 'http://blog.bouzuya.net/posts.json',
        method: 'GET'
      };
    });
}
