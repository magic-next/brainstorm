import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Nav = ({ children }) => (
  <S.NavWrapper>{children}</S.NavWrapper>
);

Nav.propTypes = {
  children: PropTypes.node,
};

Nav.defaultProps = {
  children: null,
};

export default Nav;
