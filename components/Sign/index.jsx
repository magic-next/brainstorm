import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import UserType from '@/types/User';

import Signup from './Signup';
import Signin from './Signin';

import * as S from './styled';

const Sign = ({ register, onSubmit, user }) => (
  <S.FormContainer className="flex flex-1">
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
        user={user}
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
  user: UserType,
};

Sign.defaultProps = {
  register: false,
  user: null,
  onSubmit: () => null,
};

export default Sign;
