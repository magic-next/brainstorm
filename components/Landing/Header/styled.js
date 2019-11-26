import styled from 'styled-components';
import * as V from '../../../styles';

export const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  width: 90%;
`;

export const NavWrapper = styled.nav`
  height: ${V.sizes.header};
  ul {
    height: 100%;
    display: flex;
    align-items: center;
  }
  a {
    color: inherit;
    text-decoration: none;
    display: block;
    font-size: 1.4rem;
    margin-left: 2rem;
    font-weight: 500;
    &:hover, &.primary {
      color: ${V.colors.primary};
    }
  }
`;
