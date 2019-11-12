import { Saga } from 'redux-chill';
import { startup } from './actions';
import { put, take } from 'redux-saga/effects';
import { setupLocalization } from '@localization/store';

/**
 * General app methods
 */
class GeneralSaga {
  /**
   * Init all pre-start actions
   */
  @Saga(startup)
  public *startup() {
    yield put(setupLocalization('en-us'));

    yield take(setupLocalization.success);

    yield put(startup.success());
  }
}

export { GeneralSaga };
