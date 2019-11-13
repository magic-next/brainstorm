import PropTypes from 'prop-types';

export default PropTypes.shape({
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
});
