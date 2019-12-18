import React from 'react';

import Button from '../../../Button';
import * as S from './styled';
import UserType from '../../../../types/User';

const Success = ({ user }) => (
  <S.FormWrapper>
    <h1 className="title">Cadastro realizado!</h1>
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
  </S.FormWrapper>
);

Success.propTypes = {
  user: UserType.isRequired,
};

export default Success;
