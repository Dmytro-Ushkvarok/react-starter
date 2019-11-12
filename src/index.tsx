import '@app/styles/global.scss';
import { App } from '@app';
import { Routes } from '@app/routes';
import { createStore } from '@app/store';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { localize } from '@localization/i18n';

localize();

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
