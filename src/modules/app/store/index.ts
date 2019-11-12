import createSagaMiddleware from 'redux-saga';
import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { run } from 'redux-chill';
import { app, State } from './reducer';
import { sagas } from './sagas';
import { init } from '@router/store';
import { setupLocalization } from '@localization/store';

/**
 * Sagas context
 */
type Context = {
  history: History;
};

/**
 * Create redux store
 */
const createStore = (history: History) => {
  const sagaMiddleware = createSagaMiddleware({
    onError: error => console.log(error, 'Saga error occured')
  });
  const store = reduxCreateStore(
    app,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  const context: Context = {
    history
  };

  run(sagaMiddleware, sagas, context);

  store.dispatch(init(history.location));

  return store;
};

export { Context, State, createStore };
