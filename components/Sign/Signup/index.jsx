import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { Facebook } from 'styled-icons/boxicons-logos/Facebook';

import schema from './schema';
import Button from '../../Button';
import SignSocial from '../SignSocial';
import * as S from './styled';

const InputError = ({ formik, input }) => {
  if (!formik.touched[input] || !formik.errors[input]) {
    return null;
  }
  return (
    <span className="input-error">{formik.errors[input]}</span>
  );
};

InputError.propTypes = {
  formik: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: schema,
    onSubmit: (values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    },
  });

  const inputError = (input) => (formik.touched[input] && formik.errors[input] ? 'input--error' : '');

  return (
    <S.FormWrapper onSubmit={formik.handleSubmit}>
      <h1 className="title">Crie sua conta no Magic Next</h1>
      <div className="row">
        <SignSocial
          className="btn"
          facebook
        >
          <Facebook />
          Entrar com o Facebook
        </SignSocial>
        <SignSocial
          className="btn"
        >
          <img src="/icons/google.png" alt="Logo Google" />
          Entrar com o Google
        </SignSocial>
      </div>
      <S.Separator>
        <span>
          Ou crie usando seu email
        </span>
      </S.Separator>
      <div className="row">
        <div>
          <input
            className={`input ${inputError('name')}`}
            type="text"
            name="name"
            placeholder="Nome"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <InputError formik={formik} input="name" />
        </div>
        <div>
          <input
            className={`input ${inputError('lastName')}`}
            type="text"
            name="lastName"
            placeholder="Sobrenome"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <InputError formik={formik} input="lastName" />
        </div>
      </div>
      <div className="row">
        <div>
          <input
            className={`input ${inputError('email')}`}
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <InputError formik={formik} input="email" />
        </div>
      </div>
      <div className="row">
        <div>
          <input
            className={`input ${inputError('password')}`}
            type="password"
            name="password"
            placeholder="Senha"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <InputError formik={formik} input="password" />
        </div>
        <div>
          <input
            className={`input ${inputError('passwordConfirmation')}`}
            type="password"
            name="passwordConfirmation"
            placeholder="Confirmar Senha"
            onChange={formik.handleChange}
            value={formik.values.passwordConfirmation}
          />
          <InputError formik={formik} input="passwordConfirmation" />
        </div>
      </div>
      <div className="row row-bottom">
        <span>
          Já tem uma conta?
          <Link href="/signin"><a className="link link--primary">Entrar</a></Link>
        </span>
        <Button disabled={formik.isSubmitting} type="submit" className="btn" primary>Cadastrar-se</Button>
      </div>
    </S.FormWrapper>
  );
};

export default Form;
