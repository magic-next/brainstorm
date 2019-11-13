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
  </>
);

export default Header;
