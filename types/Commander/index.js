import PropTypes from 'prop-types';
import CardType from '../Card';

export default PropTypes.shape({
  card: CardType,
  decks: PropTypes.number,
  distribuition: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }),
});
