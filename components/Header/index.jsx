import React from 'react';
import Container from '../Container';
import * as S from './styled';

const Header = () => (
  <>
    <S.HeaderWrapper>
      <Container>
        <S.LogoWrapper>
          <S.ImageWrapper alt="Magic Next Logo" src="/static/images/logo.png" />
        </S.LogoWrapper>
      </Container>
    </S.HeaderWrapper>
    <S.HeaderWrapper>
      <S.NavWrapper>
        <Container>
          <ul>
            <li>Última semana</li>
            <li>Outubro</li>
            <li>2019</li>
            <li>2018 e 2019</li>
          </ul>
        </Container>
      </S.NavWrapper>
    </S.HeaderWrapper>
  </>
);

export default Header;
