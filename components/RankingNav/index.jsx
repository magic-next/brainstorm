/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { format, subMonths, subYears } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { TrendingUp } from 'styled-icons/feather/TrendingUp';

import Container from '../Container';
import * as S from './styled';
import Nav from '../Nav';

const active = (name, filter) => (name === filter ? 'active' : '');

const NavItems = ({ filter }) => {
  const date = new Date();
  const options = { locale: ptBR };
  const month = format(subMonths(date, 1), 'MMMM', options);
  const year = format(date, 'yyyy', options);
  const prevYear = format(subYears(date, 1), 'yyyy', options);
  const basePath = '/commanders';

  return (
    <Nav>
      <S.NavWrapper>
        <Container className="flex">
          <div className="left flex">
            <TrendingUp title="Filtrar ranking" />
            <div className="title-page">
              <h1>Top Comandantes</h1>
              <small>{`${13943} Decks cadastrados`}</small>
            </div>
          </div>
        </Container>
      </S.NavWrapper>
    </Nav>
  );
};

NavItems.propTypes = {
  filter: PropTypes.string,
};

NavItems.defaultProps = {
  filter: '',
};

export default NavItems;
