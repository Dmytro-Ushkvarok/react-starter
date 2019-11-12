import { LocalizationSaga } from '@localization/store';
import { RouterSaga } from '@router/store';

/**
 * App sagas
 */
const sagas = [new LocalizationSaga(), new RouterSaga()];

export { sagas };
