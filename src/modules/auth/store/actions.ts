import { make } from 'redux-chill';
import { makeSubmitStage } from '@core/shared/formik';

/**
 * Login
 */
const login = make('[auth] login')
  .stage('success')
  .build(makeSubmitStage());

/**
 * Register
 */
const register = make('[auth] register')
  .stage('success')
  .build(makeSubmitStage());

export { login, register };
