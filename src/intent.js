// responses -> actions

import changeHeight from './intents/change-height';
import changeWeight from './intents/change-weight';
import toggle from './intents/toggle';

export default function(responses) {
  return {
    ...changeHeight(responses),
    ...changeWeight(responses),
    ...toggle(responses)
  };
}
