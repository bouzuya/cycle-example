export default function({ HTTP }) {
  const changePosts = HTTP
    .filter((response$) => response$.request.url === url)
    .mergeAll()
    .map(({ body }) => body)
  return { changePosts };
}
