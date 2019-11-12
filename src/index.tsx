import '@app/styles/global.scss';
import { App } from '@app';
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Routes } from '@app/routes';
import { put } from 'redux-saga/effects';

import { createStore } from '@app/store';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

i18next.use(initReactI18next);

const history = createBrowserHistory();
const store = createStore(history);

const setup = () => {
  console.log('setup');
  render(
    <App store={store} history={history}>
      <Routes />
    </App>,
    document.getElementById('app')
  );
};

setup();

if (module.hot) {
  module.hot.addDisposeHandler(() => {
    console.log('dispose');
    unmountComponentAtNode(document.getElementById('app'));
  });
  module.hot.accept();
}
