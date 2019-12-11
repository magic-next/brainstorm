import styled from 'styled-components';
import * as V from '../../../styles';

export const FormContainer = styled.section`
  background-color: ${V.colors.primary};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Separator = styled.div`
  margin: 2rem 0;
  font-weight: 300;
  font-size: 1.25rem;
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

export const FormWrapper = styled.form`
  font-size: 1.4rem;
  background-color: white;
  padding: 4rem;
  margin-top: 3rem;
  border-radius: .75rem;
  box-shadow: 0 0 5px 0 #000;
  label {
    display: block;
  }
  button {
    padding: 1rem 0;
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 1.5rem;
  }
  .row {
    margin: 1.25rem 0;
    display: flex;
    align-items: center;
    > * {
      flex: 1;
    }
    > * + * {
      margin-left: 1.5rem;
    }
    &-bottom {
      font-size: 1.4rem;
      margin-top: 2rem;
      a {
        margin-left: .5rem;
        font-weight: 500;
        color: ${V.colors.primary}
      }
    }
  }
`;

export const ImageWrapper = styled.img`
  width: 6rem;
`;
