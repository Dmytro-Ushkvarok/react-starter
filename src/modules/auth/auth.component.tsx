import { Field } from '@core/components';
import { Form, Formik } from 'formik';
import * as React from 'react';
import { AuthProps } from './auth.props';
import * as styles from './auth.scss';
import { Login } from './routes/login';
import { Route } from 'react-router-dom';

/**
 * Renders Auth
 */
const Auth: React.FC<AuthProps> = ({}) => (
  <div className={styles.auth}>
    <div id='test' />
    <Route path='/login' component={Login} />
  </div>
);

export { Auth };
