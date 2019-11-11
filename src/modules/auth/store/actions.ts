import { make } from 'redux-chill';
import { makeSubmitStage } from '@core/shared/formik';

/**
 * Login
 */
const login = make('[auth] login')
  .stage(({ email, password }) => ({ email, password }))
  .stage('success');

/**
 * Register
 */
const register = make('[auth] register').stage('success');

export { login, register };
