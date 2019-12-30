const { getStoredState } = require('redux-persist');
const { CookieStorage, NodeCookiesWrapper } = require('redux-persist-cookie-storage');
const Cookies = require('cookies');
const _ = require('lodash');
const { to } = require('../utils');

module.exports = () => {
  const middleware = async (req, res, next) => {
    const cookieJar = new NodeCookiesWrapper(new Cookies(req, res));
    const persistConfig = {
      key: 'root',
      storage: new CookieStorage(cookieJar),
      stateReconciler: (inboundState, originalState) => originalState,
    };
    const [, state = {}] = await to(getStoredState(persistConfig));
    if (req.session.user) {
      state.user = { user: req.session.user };
    }
    req.state = state;
    return next();
  };

  return middleware;
};
