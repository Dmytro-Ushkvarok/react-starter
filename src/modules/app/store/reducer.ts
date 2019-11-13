import { combineReducers } from 'redux';
import { auth } from '@auth/store';
import { localization } from '@localization/store';
import { router } from '@router/store';
import { general } from '@general/store';

/**
 * App rd
 */

const app = combineReducers({
  router,
  localization,
  general
});

export { app };
