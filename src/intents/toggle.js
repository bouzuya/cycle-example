export default function({ DOM }) {
  return DOM.select('input').events('click')
    .map(e => e.target.checked);
}
