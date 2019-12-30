import { reducerWrapper } from '../../../utils';

const mutations = {
  SET_USER: (state, user) => ({ user }),
};

const initialState = {
  user: null,
};

export default (state = initialState, action) => (
  reducerWrapper(state, mutations, action)
);
