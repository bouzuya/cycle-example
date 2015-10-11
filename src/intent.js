import changeHeight from './intents/change-height';
import changeWeight from './intents/change-weight';
import toggle from './intents/toggle';
import fetchPosts from './intents/fetch-posts';
import changePosts from './intents/change-posts';

export default function(responses) {
  return {
    ...changeHeight(responses),
    ...changeWeight(responses),
    ...toggle(responses),
    ...fetchPosts(responses),
    ...changePosts(responses)
  };
}
