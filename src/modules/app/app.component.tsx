import * as React from 'react';
import { AppProps } from './app.props';
import { Router } from 'react-router-dom';
import * as styles from './app.scss';

/**
 * Renders App
 */
const App: React.FC<AppProps> = ({ children, history }) => {
  React.useEffect(() => {
    console.log('CDM');
  }, []);
  return (
    <Router history={history}>
      <div className={styles.app}>{children}</div>
    </Router>
  );
};

export { App };
