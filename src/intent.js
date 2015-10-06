export default function(DOM) {
  return {
    changeHeight: DOM.select('#height').events('input')
      .map(e => e.target.value),
    changeWeight: DOM.select('#weight').events('input')
      .map(e => e.target.value),
    toggle: DOM.select('input').events('click').map(e => e.target.checked)
  };
}
