import PropTypes from 'prop-types';
import CardType from '../Card';

export default {
  card: CardType,
  decks: PropTypes.number,
  distribuition: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })),
  top: PropTypes.arrayOf(CardType),
  isCommander: PropTypes.bool,
};
