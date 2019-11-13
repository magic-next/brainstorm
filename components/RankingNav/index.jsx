import React from 'react';
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
            <a href="/">Última semana</a>
          </li>
          <li>
            <a href="/">Outubro</a>
          </li>
          <li>
            <a href="/">2019</a>
          </li>
          <li>
            <a href="/">2018 e 2019</a>
          </li>
        </ul>
      </Container>
    </S.NavWrapper>
  </Nav>
);

export default NavItems;
