import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Facebook } from 'styled-icons/boxicons-logos/Facebook';

import Button from '../../Button';
import SignSocial from '../SignSocial';
import Loader from '../../Loader';
import * as S from './styled';

const Form = ({ onSubmit }) => {
  const [submit, setSubmit] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChange = (name) => (ev) => setForm({
    ...form,
    [name]: ev.target.value,
  });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setSubmit(true);
    await onSubmit(form).catch(console.error);
    setSubmit(false);
  };

  return (
    <S.FormWrapper onSubmit={onSubmitForm}>
      <h1 className="title">Entrar no Magic Next</h1>
      <div className="row">
        <SignSocial
          className="btn"
          facebook
        >
          <Facebook />
          Entrar com o Facebook
        </SignSocial>
      </div>
      <div className="row">
        <SignSocial
          className="btn"
        >
          <img src="/icons/google.png" alt="Logo Google" />
          Entrar com o Google
        </SignSocial>
      </div>
      <S.Separator>
        <span>
          Ou entre usando seu email
        </span>
      </S.Separator>
      <div className="row">
        <input
          className="input"
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={onChange('email')}
        />
      </div>
      <div className="row">
        <input
          className="input"
          type="password"
          placeholder="Senha"
          onChange={onChange('password')}
        />
      </div>
      <div className="row row-bottom">
        <Button
          primary
          className="btn"
          type="submit"
          disabled={submit}
        >
          {submit && (
            <Loader />
          )}
          Entrar
        </Button>
      </div>
      <div className="row-bottom text--center">
        <span>
          Não possui conta?
          <Link href="/signup"><a className="link link--primary">Criar</a></Link>
        </span>
      </div>
    </S.FormWrapper>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => null,
};

export default Form;
