import styled, { css } from 'styled-components';
import * as V from '../../styles';

const shadow = (top = true) => css`
  box-shadow: 0 ${4 * (top ? 1 : -1)}px 5px -2px rgba(0, 0, 0, .2);
`;

export const NavWrapper = styled.nav`
  ${({ position }) => (shadow(position === 'top'))}
  color: ${V.colors.primary};
  padding: 1rem 0;
  font-size: 1.4rem;
  label {
    margin-left: .5rem;
    span {
      margin-right: .75rem;
    }
  }
  .flex {
    align-items: center;
  }
  h1 {
    font-size: 1.4rem;
  }
  .trending {
    height: 2rem;
    margin-right: 1rem;
  }
  button {
    margin-left: .5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    svg {
      height: 1rem;
      &.left { margin-right: .5rem; }
      &.right { margin-left: .5rem; }
    }
  }
`;
