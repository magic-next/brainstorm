import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import * as S from './styled';
import UserType from '../../../types/User';

const Success = ({ user, title }) => (
  <S.FormWrapper>
    <h1 className="title">{title}</h1>
    <p>
      Enviamos um link para confirmação de cadastro para o email:
      <em>{user.email}</em>
      .
    </p>
    <p>
      Caso não tenha recebido o email de confirmação,
      ficaremos felizes em reenviá-lo.
      <span role="img" aria-label="smile face emoji">
        😊
      </span>
    </p>
    <div className="flex">
      <Button className="flex-1" primary>Reenviar email</Button>
    </div>
    <a href="/commanders" className="link link--primary">Voltar ao início</a>
  </S.FormWrapper>
);

Success.propTypes = {
  user: UserType.isRequired,
  title: PropTypes.string,
};

Success.defaultProps = {
  title: 'Cadastro realizado!',
};

export default Success;
