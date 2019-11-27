import styled from 'styled-components';
import * as V from '../../styles';

export const NavWrapper = styled.nav`
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, .1);
  background-color: ${V.colors.secondary};
  color: ${V.colors.secondaryText};
  .flex {
    align-items: center;
  }
  .title-page {
    padding: 1.2rem 0;
    h1 {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: .25rem;
    }
    small {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, .75);
    }
  }
  svg {
    height: 2.5rem;
    margin-right: 1.5rem;
  }
`;
