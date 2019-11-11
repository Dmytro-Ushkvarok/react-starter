import '@app/styles/global.scss';
import { App } from '@app';
import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { createBrowserHistory } from 'history';
import { Routes } from '@app/routes';
import { put } from 'redux-saga/effects';

const history = createBrowserHistory();
const setup = () => {
  console.log('setup');
  render(
    <App history={history}>
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
