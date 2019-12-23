import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';

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

export default (state = {}) => {
  const middlewares = createMiddlewares();

  return createStore(
    rootReducer,
    state,
    compose(applyMiddleware(...middlewares)),
  );
};
