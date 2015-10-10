import render from './views/render';
import request from './views/request';

export default function(state$) {
  const vtree$ = render(state$);
  const request$ = request(state$);
  const requests = {
    DOM: vtree$,
    HTTP: request$
  };
  return requests;
}
