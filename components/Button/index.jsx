import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({
  children,
  rounded,
  primary,
  disabled,
  className,
  type,
}) => (
  <S.ButtonWrapper
    type={type}
    rounded={rounded}
    primary={primary}
    disabled={disabled}
    className={className}
  >
    {children}
  </S.ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node,
  rounded: PropTypes.bool,
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  disabled: false,
  rounded: false,
  primary: false,
  type: 'button',
  className: '',
};

export default Button;
