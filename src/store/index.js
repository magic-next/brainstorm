import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js';
import _ from 'lodash';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: new CookieStorage(Cookies),
  blacklist: ['user'],
};

const createMiddlewares = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
    const logger = createLogger({
      level: 'info',
      collapsed: true,
    });
    middlewares.push(logger);
  }

  return middlewares;
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (state = {}, { isServer, req }) => {
  const middlewares = createMiddlewares({ isServer });
  const store = createStore(
    persistedReducer,
    _.get(req, 'state', state),
    compose(applyMiddleware(...middlewares)),
  );

  if (!isServer) {
    store.persistor = persistStore(store);
  }

  return store;
};
