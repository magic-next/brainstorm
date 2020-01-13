import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import Success from '../SuccessInfo';
import UserType from '../../../types/User';

const Signup = ({ user, onCreate }) => {
  if (user) {
    return <Success user={user} />;
  }
  return (
    <Form
      onCreate={onCreate}
    />
  );
};

Signup.propTypes = {
  user: UserType,
  onCreate: PropTypes.func,
};

Signup.defaultProps = {
  user: null,
  onCreate: () => null,
};

export default Signup;
