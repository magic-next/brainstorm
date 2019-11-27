import React from 'react';
import Container from '../Container';
import * as S from './styled';

const Header = () => (
  <>
    <S.HeaderWrapper>
      <Container>
        <a href="/" title="Início">
          <S.LogoWrapper>
            <S.ImageWrapper alt="Magic Next Logo" src="/static/images/logo.svg" />
          </S.LogoWrapper>
        </a>
      </Container>
    </S.HeaderWrapper>
  </>
);

export default Header;
