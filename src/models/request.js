export default function({ fetchPosts }) {
  return fetchPosts
    .startWith(null)
    .map(request => ({ request }));
}
