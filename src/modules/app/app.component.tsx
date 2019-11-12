import * as React from 'react';
import { AppProps } from './app.props';
import { Router } from 'react-router-dom';
import * as styles from './app.scss';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Localization } from '@localization';
import { State } from './store';
import { ReactNode, useEffect } from 'react';
import { startup } from '@general/store';

/**
 * App content
 */
const Content: React.FC = ({ children }) => {
  const { isReady } = useSelector((state: State) => state.general);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startup(null));
  }, []);

  if (!isReady) return null;

  return <React.Fragment>{children}</React.Fragment>;
};

/**
 * Renders App
 */
const App: React.FC<AppProps> = ({ children, history, store }) => (
  <Provider store={store}>
    <Content>
      <Localization>
        <Router history={history}>
          <div className={styles.app}>{children}</div>
        </Router>
      </Localization>
    </Content>
  </Provider>
);

export { App };
