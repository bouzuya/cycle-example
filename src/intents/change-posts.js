export default function({ HTTP }) {
  const url = 'http://blog.bouzuya.net/posts.json';
  const changePosts = HTTP
    .filter((response$) => response$.request.url === url)
    .mergeAll()
    .map(({ body }) => body)
  return { changePosts };
}
