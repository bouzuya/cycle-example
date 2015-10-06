export default function({ DOM }) {
  return DOM.select('#weight').events('input')
    .map(e => e.target.value);
}
