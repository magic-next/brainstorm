import PropTypes from 'prop-types';
import CardType from '../Card';

export default PropTypes.shape({
  card: CardType,
  decks: PropTypes.number,
});
