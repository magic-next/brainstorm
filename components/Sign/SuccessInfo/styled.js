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
  .error-message,
  .success-message {
    margin-top: 1.5rem;
    background-color: ${V.colors.success};
    color: white;
    font-weight: 400;
    padding: 1.5rem 0;
    border-radius: 3px;
  }
  .error-message {
    background-color: ${V.colors.danger};
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
