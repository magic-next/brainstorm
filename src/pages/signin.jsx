import React from 'react';
import { get } from 'lodash';
import Sign from '@/containers/Sign';

const SignUp = () => (
  <Sign />
);

SignUp.getInitialProps = ({ store, res }) => {
  console.log('INFERNO', store.getState());
  const user = get(store.getState(), 'user.user');
  if (user) {
    res.redirect('/me');
    return {};
  }
  return {};
};

export default SignUp;
