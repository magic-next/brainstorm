import { reducerWrapper } from '../../../utils';

const mutations = {
  SET_USER: (state, user) => ({ ...state, user }),
  SET_TOKEN: (state, token) => ({ ...state, token }),
};

const initialState = {
  user: null,
  token: null,
};

export default (state = initialState, action) => (
  reducerWrapper(state, mutations, action)
);
