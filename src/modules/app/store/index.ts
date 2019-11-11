import createSagaMiddleware from 'redux-saga';
import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { run } from 'redux-chill';
import { app } from './reducer';

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

  run(sagaMiddleware, [], {});

  return store;
};

export { createStore };
