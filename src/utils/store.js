/**
 * Reducer wrapper
 * @param {object} state State of Store
 * @param {*} mutations Mutations object
 * @param {object} commit
 * @param {string} commit.type Type of Commit
 * @param {any} commit.payload Paylod to be commited
 */
const reducerWrapper = (state, mutations, { type, payload }) => {
  const mutation = mutations[type];
  if (!mutation) {
    return state;
  }
  return mutation(state, payload);
};
exports.reducerWrapper = reducerWrapper;
