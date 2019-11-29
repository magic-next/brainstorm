import styled from 'styled-components';
import * as V from '../../styles';

export const HeaderWrapper = styled.header`
  background-color: ${V.colors.primary};
  .flex {
    align-items: center;
  }
`;

export const LogoWrapper = styled.section`
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.img`
  height: 2.7rem;
  padding: 1.25rem 0;
`;

export const NameWrapper = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  display: inline-block;
`;

export const NavWrapper = styled.nav`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  color: rgba(255, 255, 255, .6);
  ul { display: flex; }
  li {
    transition: opacity .25s ease-in-out;
    margin: 0 .5rem;
    &:not(:hover) {
      opacity: 0.75;
    }
    svg {
      height: 2rem;
      color: white;
    }
  }
`;
