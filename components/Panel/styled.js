import styled from 'styled-components';
import media from 'styled-media-query';

export const PanelWrapper = styled.main`
  display: grid;
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: repeat(2, 1fr);
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, 1fr);
  `}
  grid-column-gap: .5rem;
  grid-row-gap: 2rem;
`;
