import React from 'react';
import Link from 'next/link';
import { Facebook } from 'styled-icons/boxicons-logos/Facebook';

import Button from '../../Button';
import SignSocial from '../SignSocial';
import * as S from './styled';

const Form = () => (
  <S.FormWrapper>
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
      <input className="input" type="text" placeholder="Nome" />
      <input className="input" type="text" placeholder="Sobrenome" />
    </div>
    <div className="row">
      <input className="input" type="text" placeholder="Email" />
    </div>
    <div className="row">
      <input className="input" type="password" placeholder="Senha" />
      <input className="input" type="password" placeholder="Confirmar Senha" />
    </div>
    <div className="row row-bottom">
      <span>
        Já tem uma conta?
        <Link href="/signin"><a className="link link--primary">Entrar</a></Link>
      </span>
      <Button className="btn" primary>Cadastrar-se</Button>
    </div>
  </S.FormWrapper>
);

export default Form;
