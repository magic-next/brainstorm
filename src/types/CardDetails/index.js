import PropTypes from 'prop-types';
import CardType from '../Card';

export default {
  card: CardType,
  decks: PropTypes.shape({
    total: PropTypes.number,
  }),
  distribuition: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  })),
  top: PropTypes.arrayOf(PropTypes.shape({
    card: CardType,
    count: PropTypes.number.isRequired,
  })),
  commanders: PropTypes.arrayOf(PropTypes.shape({
    card: CardType,
  })),
  isCommander: PropTypes.bool,
  mode: PropTypes.string,
};
