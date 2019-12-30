import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button';
import Loader from '../../Loader';
import * as S from './styled';
import UserType from '../../../types/User';
import { to } from '@/utils';

const SECONDS = 60;
let interval;

const Success = ({ user, title, onSubmit }) => {
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState({
    text: '',
    type: '',
  });

  const calcSeconds = () => {
    const resended = user.resendedAt || 0;
    const time = Math.round((resended + (SECONDS * 1000) - Date.now()) / 1000);
    return Math.max(0, time);
  };

  const [timer, setTimer] = useState(calcSeconds());

  const updateSeconds = () => {
    const seconds = calcSeconds();
    if (seconds <= 0) {
      clearInterval(interval);
      interval = null;
    }
    setTimer(seconds);
  };

  const handleClick = async () => {
    setSubmit(true);
    const [err] = await to(onSubmit());
    setSubmit(false);
    if (err) {
      setMessage({
        text: 'Erro ao reenviar email!',
        type: 'error',
      });
      return;
    }
    setMessage({
      text: 'Email de confirmação reenviado!',
      type: 'success',
    });
  };

  if (!interval && calcSeconds()) {
    interval = setInterval(updateSeconds, 1000);
  }

  return (
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
      {!!message.type && (
        <div className={`${message.type}-message text--center`}>
          {message.text}
        </div>
      )}
      <div className="flex">
        <Button
          primary
          className="flex-1"
          disabled={submit || !!timer}
          onClick={handleClick}
        >
          {submit && (
            <Loader />
          )}
          {!timer ? 'Reenviar email' : `Aguarde ${timer} segundos para reenviar`}
        </Button>
      </div>
      <a href="/commanders" className="link link--primary">Voltar ao início</a>
    </S.FormWrapper>
  );
};

Success.propTypes = {
  user: UserType.isRequired,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
};

Success.defaultProps = {
  title: 'Cadastro realizado!',
  onSubmit: () => Promise.resolve(null),
};

export default Success;
