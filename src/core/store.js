/* eslint-disable import/no-import-module-exports */
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import middleware from './middlewares';
import rootSaga from './sagas';
import reducers from './reducers';

import {reactotronEnhancer} from './middlewares/devTools';

const composeEnhancers = compose;

const isProduction = process.env.NODE_ENV === 'production';

const configureStore = preloadedState => {
    const store = createStore(
        reducers,
        preloadedState,
        isProduction ? composeEnhancers(
            applyMiddleware(
                ...middleware
            )
        ) : composeEnhancers(
            applyMiddleware(
                ...middleware
            ),
            reactotronEnhancer
        )
    );

    return store;
};

const store = configureStore();
const [sagaMiddleware] = middleware;

let sagaTask = sagaMiddleware.run(rootSaga);

if (module.hot && !isProduction) {
    module.hot.accept('./reducers', () => store.replaceReducer(reducers));
    module.hot.accept('./sagas', () => {
        sagaTask.cancel();
        sagaTask = sagaMiddleware.run(rootSaga);
    });
}

export default store;
