import { combineReducers } from 'redux';
import { auth } from '@auth/store';

const app = combineReducers({
  auth
});

type State = ReturnType<typeof app>;

export { State, app };
