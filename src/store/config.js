import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'data',
  keyPrefix: '',
  storage,
  whitelist: ['user', 'pages', 'pageBlocks', 'blockColumns', 'columnWidgets', 'media'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore();
const persistor = persistStore(store);

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate children={children} persistor={persistor} />
  </Provider>
);

export default StoreProvider;
