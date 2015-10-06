export default function(DOM) {
  return {
    toggle: DOM.select('input').events('click').map(e => e.target.checked)
  };
}
