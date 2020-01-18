import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: thin solid #ccc;
  display: flex;

  button:not(:last-child) {
    margin-right: .5rem;
  }
`;
