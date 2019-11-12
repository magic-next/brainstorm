import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  border-bottom: solid 1px #e5e5e5;
`;

export const LogoWrapper = styled.section`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.img`
  height: 3rem;
`;

export const NameWrapper = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  display: inline-block;
`;

export const NavWrapper = styled.nav`
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, .1);
  li {
    font-size: 1.2rem;
    padding: 1.5rem 0;
    display: inline-block;
    &:not(:first-child) {
      margin-left: 3rem;
    }
  }
`;
