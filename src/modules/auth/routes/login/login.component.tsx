import * as React from 'react';
import { LoginProps } from './login.props';
import * as styles from './login.scss';
import { Formik } from 'formik';
import { Field, Text } from '@core/components';

/**
 * Renders Login
 */
const Login: React.FC<LoginProps> = ({}) => (
  <div className={styles.login}>
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Field.Text name='email' />
    </Formik>
  </div>
);

export { Login };
