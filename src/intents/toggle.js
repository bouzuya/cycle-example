export default function({ DOM }) {
  const toggle = DOM.select('input').events('click')
    .map(e => e.target.checked);
  return { toggle };
}
