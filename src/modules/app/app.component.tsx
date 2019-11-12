import * as React from 'react';
import { AppProps } from './app.props';
import { Router } from 'react-router-dom';
import * as styles from './app.scss';
import { Provider } from 'react-redux';
import { Localization } from '@localization';

/**
 * Renders App
 */
const App: React.FC<AppProps> = ({ children, history, store }) => (
  <Provider store={store}>
    <Localization>
      <Router history={history}>
        <div className={styles.app}>{children}</div>
      </Router>
    </Localization>
  </Provider>
);

export { App };
