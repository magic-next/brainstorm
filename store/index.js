import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
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

export default (state = {}, { isServer }) => {
  const middlewares = createMiddlewares({ isServer });

  const store = createStore(
    persistedReducer,
    state,
    compose(applyMiddleware(...middlewares)),
  );

  if (!isServer) {
    store.persistor = persistStore(store);
  }

  return store;
};
