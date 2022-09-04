import {all} from 'redux-saga/effects';

import MotoPlexSagas from './state/MotoPlex/sagas';

export default function* rootSagas() {
    yield all([
        MotoPlexSagas()
    ]);
}
