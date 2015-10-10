export default function({ changeWeight }) {
  return changeWeight
    .startWith(70)
    .map(weight => ({ weight }));
}
