import { LocalizationSaga } from '@localization/store';
import { RouterSaga } from '@router/store';
import { GeneralSaga } from '@general/store';

/**
 * App sagas
 */
const sagas = [new LocalizationSaga(), new RouterSaga(), new GeneralSaga()];

export { sagas };
