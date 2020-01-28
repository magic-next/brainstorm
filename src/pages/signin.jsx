import React from 'react';
import { get } from 'lodash';
import Sign from '@/containers/Sign';
import NextLib from '@/libs/next';
import Cookie from '@/libs/cookie';
import { restore } from '../libs/store';

const SignUp = () => (
  <Sign />
);

SignUp.getInitialProps = async (ctx) => {
  const cookies = new Cookie(ctx);
  const app = new NextLib(ctx);
  const state = await restore({ cookies, ctx });
  const token = get(state, 'user.token');
  if (token) {
    app.redirect('/me');
    return {};
  }
  return {};
};

export default SignUp;
