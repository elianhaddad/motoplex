import {all} from 'redux-saga/effects';

import gitHub from './state/GitHub/sagas';

export default function* rootSagas() {
    yield all([
        gitHub()
    ]);
}
