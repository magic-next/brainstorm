import React from 'react';
import Router from 'next/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sign from '../components/Sign';
import UserType from '../types/User';

import { setUser } from '../store/actions/user';
import { auth, resend, socialAuth } from '../services/users';
import { to } from '../utils';

const SignUp = ({ register, user, setUser: set }) => {
  const getUserFromSource = ({ provider, values }) => {
    if (provider) {
      return socialAuth[provider]();
    }
    return auth(values);
  };

  const onSubmit = async ({ provider, ...values }) => {
    const [err, res] = await to(getUserFromSource({ provider, values }));
    if (err || !res) {
      console.error(err);
      return;
    }
    set(res.user);
    Router.push('/me');
  };

  const onCreate = (userData) => {
    set(userData);
  };

  const onResend = async () => {
    const [err] = await to(resend());
    if (err && err.status === 401) {
      set(null);
      return;
    }
    set({ ...user, resendedAt: Date.now() });
  };

  return (
    <Sign
      register={register}
      onSubmit={onSubmit}
      onCreate={onCreate}
      onResend={onResend}
      user={user}
    />
  );
};

SignUp.propTypes = {
  user: UserType,
  register: PropTypes.bool,
  setUser: PropTypes.func.isRequired,
};

SignUp.defaultProps = {
  user: null,
  register: false,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const actions = {
  setUser,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
