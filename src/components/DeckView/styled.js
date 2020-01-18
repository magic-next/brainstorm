import styled from 'styled-components';

export const DeckViewWrapper = styled.div`
  margin-top: 2rem;
`;

export const CategoriesWrapper = styled.section`
  column-width: 27rem;
  > * {
    column-break-inside: avoid;
    display: inline-block;
  }
`;
