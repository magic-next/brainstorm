const colorsCombinations = {
  W: 'Branco',
  U: 'Azul',
  B: 'Preto',
  R: 'Vermelho',
  G: 'Verde',
  C: 'Incolor',
  UW: 'Azorius',
  BU: 'Dimir',
  BR: 'Rakdos',
  GR: 'Gruul',
  GW: 'Selesnya',
  BW: 'Orzhov',
  RU: 'Izzet',
  BG: 'Golgari',
  RW: 'Boros',
  GU: 'Simic',
  BUW: 'Esper',
  BRU: 'Grixis',
  BGR: 'Jund',
  GRW: 'Naya',
  GUW: 'Bant',
  BGW: 'Abzan',
  RUW: 'Jeskai',
  BGU: 'Sultai',
  BRW: 'Mardu',
  GRU: 'Temur',
  BRUW: 'Yore-Tiller',
  BGRU: 'Glint-Eye',
  BGRW: 'Dune-Brood',
  GRUW: 'Ink-Treader',
  BGUW: 'Witch-Maw',
  BGRUW: '5 cores',
};
exports.colorsCombinations = colorsCombinations;

const types = {
  Enchantment: 'Encantamento',
  Land: 'Terreno',
  Artifact: 'Artefato',
  Instant: 'Instantânea',
  Creature: 'Criatura',
  Sorcery: 'Feitiço',
};
exports.types = types;

/**
 * Promise wrapper to ellegant async/await use
 * @param {Promise} promise Promise to be wrapped
 * @returns {Promise<[Error, Object]>}
 */
const to = (promise) => promise
  .then((data) => [null, data])
  .catch((err) => [err, null]);
exports.to = to;

const reducerWrapper = (state, mutations, { type, payload }) => {
  const mutation = mutations[type];
  if (!mutation) {
    return state;
  }
  return mutation(state, payload);
};
exports.reducerWrapper = reducerWrapper;
