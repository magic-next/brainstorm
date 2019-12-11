import React from 'react';
import PropTypes from 'prop-types';

import Signup from './Signup';
import Signin from './Signin';
import * as S from './styled';

const Sign = ({ register }) => (
  <S.FormContainer className="flex flex-1">
    <S.ImageWrapper
      src="/images/logo.svg"
      alt="Logo Magic Next"
    />
    {!register ? (
      <Signin />
    ) : (
      <Signup />
    )}
  </S.FormContainer>
);

Sign.propTypes = {
  register: PropTypes.bool,
};

Sign.defaultProps = {
  register: false,
};

export default Sign;
