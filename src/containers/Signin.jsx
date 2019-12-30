import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sign from '../components/Sign';
import UserType from '../types/User';

import { setUser } from '../store/actions/user';
import { auth, resend } from '../services/users';
import { to } from '../utils';

const SignUp = ({ user, setUser: set }) => {
  const onSubmit = async (values) => {
    const [err, res] = await to(auth(values));
    if (err || !res) {
      console.error(err);
      return;
    }
    set(res.user);
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
      onSubmit={onSubmit}
      onResend={onResend}
      user={user}
    />
  );
};

SignUp.propTypes = {
  user: UserType,
  setUser: PropTypes.func.isRequired,
};

SignUp.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const actions = {
  setUser,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);