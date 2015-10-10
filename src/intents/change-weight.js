export default function({ DOM }) {
  const changeWeight = DOM.select('#weight').events('input')
    .map(e => e.target.value);
  return { changeWeight };
}
