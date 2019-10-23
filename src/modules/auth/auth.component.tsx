import * as React from 'react';
import { AuthProps } from './auth.props';
import * as styles from './auth.scss';
import { Routes } from './routes';

/**
 * Renders Auth
 */
const Auth: React.FC<AuthProps> = ({}) => (
  <div className={styles.auth}>
    <Routes />
  </div>
);

export { Auth };
