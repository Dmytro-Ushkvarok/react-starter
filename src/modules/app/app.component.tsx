import * as React from 'react';
import { AppProps } from './app.props';
import { Router } from 'react-router-dom';
import * as styles from './app.scss';
import { Provider } from 'react-redux';

/**
 * Renders App
 */
const App: React.FC<AppProps> = ({ children, history, store }) => {
  React.useEffect(() => {
    console.log('CDM');
  }, []);

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className={styles.app}>{children}</div>
      </Router>
    </Provider>
  );
};

export { App };
