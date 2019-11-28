import styled from 'styled-components';
import * as V from '../../styles';

export const NavWrapper = styled.nav`
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, .1);
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
  svg {
    height: 2rem;
    margin-right: 1rem;
  }
`;
