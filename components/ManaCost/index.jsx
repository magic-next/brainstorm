import React from 'react';
import PropTypes from 'prop-types';

const ManaCost = ({ text }) => {
  const replaced = text.replace(/\{(\w+)\}/gi, '$1');
  return (
    <span>{replaced}</span>
  );
};

ManaCost.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ManaCost;
