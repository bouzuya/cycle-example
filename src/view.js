import render from './views/render';

export default function(state$) {
  const vtree$ = render(state$);
  const requests = {
    DOM: vtree$
  };
  return requests;
}
