import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({ children, ...props }) => (
  <S.ButtonWrapper {...props}>
    {children}
  </S.ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node,
  rounded: PropTypes.bool,
  flat: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  block: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  disabled: false,
  small: false,
  rounded: false,
  flat: false,
  primary: false,
  block: false,
  secondary: false,
  color: null,
  type: 'button',
  className: '',
};

export default Button;
