import React from 'react';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Button from '@/components/Button';
import UserType from '@/types/User';

import * as S from './styled';

export const DashboardMenu = ({ user }) => {
  return (
    <S.MenuWrapper>
      <div className="back-area">
        <a href="/me">
          <Button small primary block>
            Cadastrar Deck
          </Button>
        </a>
      </div>
      <h1>{`${user.name} ${user.lastName}`}</h1>
      <h2>
        Deck cadastrados:
        <strong className="text--bold format">23</strong>
        <br />
        Ativo desde
        <strong className="text--bold">{formatRelative(new Date(user.createdAt), new Date(), { locale: ptBR })}</strong>
      </h2>
    </S.MenuWrapper>
  );
};

DashboardMenu.propTypes = {
  user: UserType.isRequired,
};

export default DashboardMenu;
