export const types = {
  Enchantment: 'Encantamento',
  Land: 'Terreno',
  Artifact: 'Artefato',
  Instant: 'Instantânea',
  Creature: 'Criatura',
  Sorcery: 'Feitiço',
};

export const reducerWrapper = (state, mutations, { action, payload }) => {
  const mutation = mutations[action];
  if (!mutation) {
    return state;
  }
  return mutation(state, payload);
};
