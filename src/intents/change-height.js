export default function({ DOM }) {
  return DOM.select('#height').events('input')
    .map(e => e.target.value);
}
