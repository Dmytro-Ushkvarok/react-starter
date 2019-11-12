import { Context } from '@app/store';
import { Payload, Saga } from 'redux-chill';
import { put, takeEvery } from 'redux-saga/effects';
import { navigate } from './actions';

class RouterSaga {
  /**
   * Navigate to location if history exsists
   */
  @Saga(takeEvery, navigate)
  public *navigate(location: Payload<typeof navigate>, { history }: Context) {
    if (!history) return;

    history.push(location);

    yield put(navigate.emitted(history.location));
  }
}

export { RouterSaga };
