import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const PERSIST_KEY = 'root';

const persistConfig = {
  key: PERSIST_KEY,
  storage,
  stateReconciler: autoMergeLevel2,
  trnasforms: [createTransform(
    (inboundState) => ({ ...inboundState, error: '' }),
    (outboundState) => ({ ...outboundState, error: '' })
  )]
};

export default() => {
  const sagaMiddleware = createSagaMiddleware();

  const configStore = () => createStore(
    persistReducer(persistConfig, rootReducer),
    ((process.browser && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose)(applyMiddleware(sagaMiddleware))
  );

  const store = configStore();
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  return { store, persistor }
}
