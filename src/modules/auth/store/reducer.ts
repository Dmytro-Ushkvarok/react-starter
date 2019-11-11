import { reducer } from 'redux-chill';
import { login, register } from './actions';

/**
 * Auth reducer
 */
const auth = reducer({
  isFetching: false
})
  .on(login, (state, { email, password }) => {})
  .on([login, register], state => {
    state.isFetching = false;
  });

/**
 * Auth state
 */
type AuthState = ReturnType<typeof auth>;

export { AuthState, auth };
