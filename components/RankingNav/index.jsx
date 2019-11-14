import React from 'react';
import Link from 'next/link';
import { Filter } from 'styled-icons/boxicons-regular/Filter';
import Container from '../Container';
import * as S from './styled';
import Nav from '../Nav';

const NavItems = () => (
  <Nav>
    <S.NavWrapper>
      <Container>
        <ul>
          <li>
            <Filter title="Filtrar ranking" />
          </li>
          <li>
            <Link href={{ pathname: '/ranking', query: { filter: 'week' } }}>
              <a>Última semana</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/ranking', query: { filter: 'month' } }}>
              <a>Outubro</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/ranking', query: { filter: 'year' } }}>
              <a>2019</a>
            </Link>
          </li>
          <li>
            <Link href={{ pathname: '/ranking', query: { filter: 'years' } }}>
              <a>2018 e 2019</a>
            </Link>
          </li>
        </ul>
      </Container>
    </S.NavWrapper>
  </Nav>
);

export default NavItems;
