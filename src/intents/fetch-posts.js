export default function({ DOM }) {
  const fetchPosts = DOM.select('#fetch').events('click');
  return { fetchPosts };
}
