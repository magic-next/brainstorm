import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Signup from './Signup';
import Signin from './Signin';

import * as S from './styled';

const Sign = ({ register, onSubmit, user }) => (
  <S.FormContainer className="flex flex-1">
    <pre>{JSON.stringify(user)}</pre>
    <Link href="/">
      <a>
        <S.ImageWrapper
          src="/images/logo.svg"
          alt="Logo Magic Next"
        />
      </a>
    </Link>
    {!register ? (
      <Signin
        onSubmit={onSubmit}
      />
    ) : (
      <Signup />
    )}
  </S.FormContainer>
);

Sign.propTypes = {
  register: PropTypes.bool,
  onSubmit: PropTypes.func,
};

Sign.defaultProps = {
  register: false,
  onSubmit: () => null,
};

export default Sign;
