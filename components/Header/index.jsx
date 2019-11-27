import React from 'react';
import { Search } from 'styled-icons/boxicons-regular/Search';
import Container from '../Container';
import * as S from './styled';

const Header = () => (
  <>
    <S.HeaderWrapper>
      <Container className="flex">
        <S.LogoWrapper>
          <a href="/" title="Magic Next">
            <S.ImageWrapper alt="Magic Next Logo" src="/static/images/logo.svg" />
          </a>
        </S.LogoWrapper>
        <S.SearchWrapper>
          <Search />
          <input type="text" placeholder="Pesquisar carta..." />
        </S.SearchWrapper>
      </Container>
    </S.HeaderWrapper>
  </>
);

export default Header;
