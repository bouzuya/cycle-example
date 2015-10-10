export default function({ DOM }) {
  const changeHeight = DOM.select('#height').events('input')
    .map(e => e.target.value);
  return { changeHeight };
}
