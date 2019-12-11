import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Button = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
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
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  disabled: false,
  rounded: false,
  flat: false,
  primary: false,
  secondary: false,
  type: 'button',
  className: '',
};

export default Button;
