export default function({ changeHeight }) {
  return changeHeight
    .startWith(170)
    .map(height => ({ height }));
}
