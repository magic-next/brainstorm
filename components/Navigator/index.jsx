import React from 'react';
import PropTypes from 'prop-types';
import NavLinkType from '../../types/NavLink';

const Navigator = ({ path }) => {
  if (!path.length) {
    return null;
  }
  return (
    <nav>{JSON.stringify(path, null, 2)}</nav>
  );
};

Navigator.propTypes = {
  path: PropTypes.arrayOf(NavLinkType).isRequired,
};

export default Navigator;
