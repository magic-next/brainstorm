import React from 'react';
import Link from 'next/link';

import Button from '../Button';
import * as S from './styled';

const Form = () => (
  <S.FormContainer className="flex flex-1">
    <S.ImageWrapper
      src="/images/logo.svg"
      alt="Logo Magic Next"
    />
    <S.FormWrapper>
      <h1 className="title">Crie sua conta no Magic Next</h1>
      <div className="row">
        <Button className="btn" primary>Entrar com o Facebook</Button>
        <Button className="btn" primary>Entrar com o Google</Button>
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
          <Link href="/"><a>Entrar</a></Link>
        </span>
        <Button className="btn" primary>Cadastrar-se</Button>
      </div>
    </S.FormWrapper>
  </S.FormContainer>
);

export default Form;
