import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({
  children,
  rounded,
  primary,
  type,
}) => (
  <S.ButtonWrapper
    type={type}
    rounded={rounded}
    primary={primary}
  >
    {children}
  </S.ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node,
  rounded: PropTypes.bool,
  primary: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  rounded: false,
  primary: false,
  type: 'button',
};

export default Button;
