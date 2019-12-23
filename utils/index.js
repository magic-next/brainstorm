export const types = {
  Enchantment: 'Encantamento',
  Land: 'Terreno',
  Artifact: 'Artefato',
  Instant: 'Instantânea',
  Creature: 'Criatura',
  Sorcery: 'Feitiço',
};

/**
 * Promise wrapper to ellegant async/await use
 * @param {Promise} promise Promise to be wrapped
 * @returns {Promise<[Error, Object]>}
 */
export const to = (promise) => promise
  .then((data) => [null, data])
  .catch((err) => [err, null]);

export const reducerWrapper = (state, mutations, { type, payload }) => {
  const mutation = mutations[type];
  if (!mutation) {
    return state;
  }
  return mutation(state, payload);
};
