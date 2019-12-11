import React from 'react';
import Link from 'next/link';
import { Facebook } from 'styled-icons/boxicons-logos/Facebook';

import Button from '../../Button';
import SignSocial from '../SignSocial';
import * as S from './styled';

const Form = () => (
  <S.FormWrapper>
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
        <img draggable={false} src="/icons/google.png" alt="Logo Google" />
        Entrar com o Google
      </SignSocial>
    </div>
    <S.Separator>
      <span>
        Ou entre usando seu email
      </span>
    </S.Separator>
    <div className="row">
      <input className="input" type="text" placeholder="Email" />
    </div>
    <div className="row">
      <input className="input" type="password" placeholder="Senha" />
    </div>
    <div className="row row-bottom">
      <Button className="btn" primary>Entrar</Button>
    </div>
    <div className="row-bottom text--center">
      <span>
        Não possui conta?
        <Link href="/signup"><a className="link link--primary">Criar</a></Link>
      </span>
    </div>
  </S.FormWrapper>
);

export default Form;
