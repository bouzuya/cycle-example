import { Rx } from '@cycle/core';

export default function(state$) {
  return state$
    .map(({ request }) => request)
    .filter(i => i)
    .map(() => {
      return {
        url: 'http://blog.bouzuya.net/posts.json',
        method: 'GET'
      };
    });
}
