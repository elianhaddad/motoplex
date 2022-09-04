import createSagaMiddleware from 'redux-saga';

import {sagaMonitor} from './devTools';

const isProduction = process.env.NODE_ENV === 'production';
const sagaMiddleware = isProduction ? createSagaMiddleware() : createSagaMiddleware({sagaMonitor});

const middleware = [
    sagaMiddleware
];
export default middleware;
