import PropTypes from 'prop-types';
import CardType from '../Card';

export default PropTypes.oneOfType([
  PropTypes.arrayOf(CardType),
  PropTypes.shape({
    Land: PropTypes.arrayOf(CardType),
    Creature: PropTypes.arrayOf(CardType),
    Planeswalker: PropTypes.arrayOf(CardType),
    Enchantment: PropTypes.arrayOf(CardType),
    Sorcery: PropTypes.arrayOf(CardType),
    Instant: PropTypes.arrayOf(CardType),
    Artifact: PropTypes.arrayOf(CardType),
  }),
]);
