export default function({ DOM }) {
  const toggle = DOM.select('#toggle').events('click')
    .map(e => e.target.checked);
  return { toggle };
}
