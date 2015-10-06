// responses -> actions

import changeHeight from './intents/change-height';
import changeWeight from './intents/change-weight';
import toggle from './intents/toggle';

export default function(responses) {
  return {
    changeHeight: changeHeight(responses),
    changeWeight: changeWeight(responses),
    toggle: toggle(responses)
  };
}
