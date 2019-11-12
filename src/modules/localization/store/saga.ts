import { Saga, Payload } from 'redux-chill';
import { changeLanguage, setupLocalization } from './actions';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { call, put } from 'redux-saga/effects';

class LocalizationSaga {
  /**
   * Change current language
   */
  @Saga(changeLanguage)
  public *change(language: Payload<typeof changeLanguage>) {
    i18next.changeLanguage(language);
  }
  /**
   * Setup i18next
   */
  @Saga(setupLocalization)
  public *setup(language: Payload<typeof setupLocalization>) {
    yield call(i18next.init, {
      resources: {
        'en-us': {
          translation: {}
        }
      },
      lng: language,
      fallbackLng: 'en-us',
      interpolation: {
        escapeValue: false
      }
    });
    yield put(setupLocalization.success());
  }
}

export { LocalizationSaga };
