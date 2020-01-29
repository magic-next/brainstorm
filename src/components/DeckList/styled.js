import styled from 'styled-components';

export const ListWrapper = styled.table`
  font-size: 1.4rem;
  width: 100%;
  thead {
    border-bottom: thin solid rgba(0, 0, 0, .1);
    td {
      font-weight: bold;
      color: #555;
      text-transform: uppercase;
      margin-bottom: .5rem;
    }
  }
`;
