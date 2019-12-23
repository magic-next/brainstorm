import { reducerWrapper } from '../../../utils';

const mutations = {
  SET_USER: (state, user) => ({ user: { ...state.user, ...user } }),
};

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  reducerWrapper(state, mutations, action);
};
