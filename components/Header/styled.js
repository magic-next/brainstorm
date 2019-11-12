import styled from 'styled-components';
import * as V from '../../styles';

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
    display: inline-block;
  }
  a {
    padding: 1.5rem;
    display: inline-block;
    text-decoration: none;
    color: #555;
    transition: color .25s ease-in-out;
    border-bottom: 2px solid transparent;
    &:hover, &:active, &.active {
      color: ${V.colors.primary};
    }
    &.active {
      border-bottom-color: ${V.colors.primary};
    }
  }
`;
