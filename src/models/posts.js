export default function({ changePosts }) {
  return changePosts
    .startWith('Loading...')
    .map(posts => ({ posts }));
}
