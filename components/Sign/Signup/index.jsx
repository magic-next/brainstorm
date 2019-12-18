import React, { useState } from 'react';
import Form from './Form';
import Success from './Success';

const Signup = () => {
  const [created, setCreated] = useState(null);
  if (created) {
    return <Success user={created} />;
  }
  return (
    <Form
      onCreate={setCreated}
    />
  );
};

export default Signup;
