// responses -> actions

import changeHeight from './intents/change-height';
import changeWeight from './intents/change-weight';
import toggle from './intents/toggle';
import fetchPosts from './intents/fetch-posts';

export default function(responses) {
  return {
    ...changeHeight(responses),
    ...changeWeight(responses),
    ...toggle(responses),
    ...fetchPosts(responses)
  };
}
