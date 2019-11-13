import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const Nav = ({ children, flat, dark }) => (
  <S.NavWrapper flat={flat} dark={dark}>{children}</S.NavWrapper>
);

Nav.propTypes = {
  children: PropTypes.node,
  flat: PropTypes.bool,
  dark: PropTypes.bool,
};

Nav.defaultProps = {
  children: null,
  flat: false,
  dark: false,
};

export default Nav;
