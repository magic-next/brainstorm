import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sign from '../components/Sign';
import UserType from '../types/User';

import { setUser } from '../store/actions/user';
import { auth } from '../services/users';
import { to } from '../utils';

const SignUp = ({ user, setUser: set }) => {
  const onSubmit = async (values) => {
    const [err, res] = await to(auth(values));
    if (err || !res) {
      console.error(err);
      return;
    }
    console.log('SUBMIT', err, res);
    set(res.user);
  };
  return (
    <Sign
      onSubmit={onSubmit}
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
