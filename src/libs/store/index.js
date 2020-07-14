const { getStoredState } = require('redux-persist');
const { CookieStorage } = require('redux-persist-cookie-storage');
const { to } = require('../../utils');

export const restore = async ({ cookies }) => {
  const persistConfig = {
    key: 'root',
    storage: new CookieStorage(cookies),
    stateReconciler: (inboundState, originalState) => originalState,
  };
  const [, state = {}] = await to(getStoredState(persistConfig));
  return state;
};
