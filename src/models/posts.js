export default function({ changePosts }) {
  return changePosts
    .map(posts => JSON.parse(posts))
    .startWith([])
    .map(posts => ({ posts }));
}
