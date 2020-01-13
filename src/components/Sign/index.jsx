import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import UserType from '@/types/User';

import Signup from './Signup';
import Signin from './Signin';

import * as S from './styled';

const Sign = ({
  register,
  onSubmit,
  onCreate,
  user,
  onResend,
}) => (
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
        onResend={onResend}
      />
    ) : (
      <Signup
        onCreate={onCreate}
        user={user}
      />
    )}
  </S.FormContainer>
);

Sign.propTypes = {
  register: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCreate: PropTypes.func,
  onResend: PropTypes.func,
  user: UserType,
};

Sign.defaultProps = {
  register: false,
  user: null,
  onSubmit: () => null,
  onCreate: () => null,
  onResend: () => null,
};

export default Sign;
