import { combineReducers } from 'redux';
import { auth } from '@auth/store';
import { localization } from '@localization/store';
import { router } from '@router/store';

/**
 * App rd
 */

const app = combineReducers({
  router,
  localization
});

/**
 * App state
 */
type State = ReturnType<typeof app>;

export { State, app };
