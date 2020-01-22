import styled from 'styled-components';
import DeckViewSummary from './DeckViewSummary';

export const DeckViewWrapper = styled.div`
  margin-top: 2rem;
`;

export const DeckViewSections = styled.main`
  display: flex;
`;

export const SummaryWrapper = styled(DeckViewSummary)`
  max-width: 20vw;
  margin-right: 1rem;
`;

export const CategoriesWrapper = styled.section`
  column-width: 27rem;
  > * {
    column-break-inside: avoid;
    display: inline-block;
  }
`;
