import styled from 'styled-components';
import SignForm from '../../SignForm';

export const Separator = styled.div`
  margin: 2rem 0;
  font-weight: 300;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  span {
    margin: 0 1rem;
  }
  &::before, &::after {
    content: '';
    display: block;
    height: 0;
    flex: 1;
    border-top: thin solid #999;
  }
`;

export const FormWrapper = styled(SignForm)`
  min-width: 25vw;
`;
