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
            <li>
              <a href="/" className="active">Sempre</a>
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
    </S.HeaderWrapper>
  </>
);

export default Header;
