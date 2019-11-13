import * as React from 'react';
import { RoutesProps } from './routes.props';
import * as styles from './routes.scss';
import { Route, Link } from 'react-router-dom';
import { Auth } from '@auth';

/**
 * Renders Routes
 */
const Routes: React.FC<RoutesProps> = ({}) => (
  <div className={styles.routes}>
    <Route path='/auth' component={Auth} />
  </div>
);

export { Routes };
