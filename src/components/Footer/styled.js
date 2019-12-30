import styled from 'styled-components';
import * as V from '../../styles';

export const FooterWrapper = styled.footer`
  background-color: ${V.colors.primary};
  color: white;
  padding: 2rem 0;
  small {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, .6);
  }
  .areas{
    margin-bottom: 1rem;
    & > * {
      margin-right: 2rem;
    }
  }
`;
