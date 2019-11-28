import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({
  children,
  rounded,
  primary,
  disabled,
  type,
}) => (
  <S.ButtonWrapper
    type={type}
    rounded={rounded}
    primary={primary}
    disabled={disabled}
  >
    {children}
  </S.ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node,
  rounded: PropTypes.bool,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  disabled: false,
  rounded: false,
  primary: false,
  type: 'button',
};

export default Button;
