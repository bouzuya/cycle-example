export default function({ toggle }) {
  return toggle
    .startWith(false)
    .map(toggled => ({ toggled }));
}
