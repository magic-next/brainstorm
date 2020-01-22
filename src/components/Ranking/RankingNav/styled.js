import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import * as V from '../../../styles';

const shadow = (top = true) => css`
  box-shadow: 0 ${4 * (top ? 1 : -1)}px 5px -2px rgba(0, 0, 0, .2);
`;

export const SettingsWrapper = styled.div`
  svg {
    fill: ${V.colors.primary};
    width: 1.8rem;
    margin-left: 1rem;
  }
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
  .trending--bottom, .paginator--top, .trending--top span {
    ${media.lessThan('small')`
      display: none;
    `}
  }
  .paginator {
    align-items: center;
  }
  .paginator--bottom {
    display: flex;
    ${media.lessThan('small')`
      flex: 1;
    `}
    justify-content: center;
    align-items: center;
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
