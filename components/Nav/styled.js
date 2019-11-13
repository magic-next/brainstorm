import styled from 'styled-components';
import * as V from '../../styles';

export const NavWrapper = styled.nav`
  background-color: ${({ dark }) => (dark ? V.colors.primary : 'transparent')};
  box-shadow: ${({ flat }) => (!flat ? ' 0 4px 5px -2px rgba(0, 0, 0, .1)' : 'inherit')};
  li {
    font-size: 1.2rem;
    display: inline-block;
  }
  a {
    padding: 1.5rem;
    display: inline-block;
    text-decoration: none;
    color: ${({ dark }) => (dark ? 'rgba(255, 255, 255, .85)' : '#555')};
    transition: color .25s ease-in-out;
    border-bottom: 2px solid transparent;
    &:hover, &:active, &.active {
      color: ${({ dark }) => (dark ? 'white' : V.colors.primary)};
    }
    &.active {
      border-bottom-color: ${V.colors.primary};
    }
  }
`;
