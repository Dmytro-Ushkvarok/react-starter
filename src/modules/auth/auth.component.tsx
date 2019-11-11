import * as React from 'react';
import { AuthProps } from './auth.props';
import * as styles from './auth.scss';
import { Routes } from './routes';
import { Formik, Form } from 'formik';
import { Field } from '@core/components';
import { login } from './store';
import { Helmet } from 'react-helmet';
/**
 * Renders Auth
 */
const Auth: React.FC<AuthProps> = ({}) => (
  <React.Fragment>
    <Helmet>
      <title>Authorization</title>
    </Helmet>
    <div className={styles.auth}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(...payload) => login(payload, null)}
      >
        {() => (
          <Form>
            <Field.Text name='email' />
            <Field.Text name='password' />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
      {/* <Routes /> */}
    </div>
  </React.Fragment>
);

export { Auth };
