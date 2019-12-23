import styled from 'styled-components';
import SignForm from '../SignForm';
import * as V from '../../../styles';

export const FormWrapper = styled(SignForm)`
  .title { font-weight: bold; }
  em {
    font-weight: 500;
    margin-left: .5rem;
    color: ${V.colors.primary};
  }
  .flex {
    margin-top: 2rem;
  }
  p {
    line-height: 2rem;
    max-width: 25vw;
    margin-bottom: 1rem;
  }
  a {
    display: block;
    margin-top: 2rem;
    text-align: center;
  }
`;
