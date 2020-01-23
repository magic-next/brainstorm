import styled from 'styled-components';

const size = '1rem';

export const HeaderWrapper = styled.header`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  display: flex;

  svg {
    height: ${size};
    width: ${size};
    margin-right: .5rem;
  }

  button:not(:last-child) {
    margin-right: .5rem;
  }
`;
