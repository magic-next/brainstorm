import React from 'react';
import Router from 'next/router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sign from '../components/Sign';
import UserType from '../types/User';

import { setUser, setToken } from '../store/actions/user';
import { auth, resend, socialAuth } from '../services/users';
import { to } from '../utils';

const SignUp = ({
  register,
  user,
  setUser: setUserStore,
  setToken: setTokenStore,
}) => {
  const getUserFromSource = ({ provider, values }) => {
    if (provider) {
      return socialAuth[provider]();
    }
    return auth(values);
  };

  const onSubmit = async ({ provider, ...values }) => {
    const [err, res] = await to(getUserFromSource({ provider, values }));
    if (err || !res) {
      return;
    }
    setUserStore(res.user);
    setTokenStore(res.token);
    Router.push('/me');
  };

  const onCreate = (userData) => {
    setUserStore(userData);
  };

  const onResend = async () => {
    const [err] = await to(resend());
    if (err && err.status === 401) {
      setUserStore(null);
      return;
    }
    setUserStore({ ...user, resendedAt: Date.now() });
  };

  return (
    <>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      <Sign
        register={register}
        onSubmit={onSubmit}
        onCreate={onCreate}
        onResend={onResend}
        user={user}
      />
    </>
  );
};

SignUp.propTypes = {
  user: UserType,
  register: PropTypes.bool,
  setUser: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
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
  setToken,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
