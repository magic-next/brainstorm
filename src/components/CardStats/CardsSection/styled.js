import styled from 'styled-components';
import media from 'styled-media-query';

export const SectionWrapper = styled.section`
  ${media.greaterThan('medium')`
    margin-bottom: 3rem;
  `}
  .title {
    font-size: 1.8rem;
    text-transform: uppercase;
  }
`;

export const GridWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(5, minmax(0, 1fr));
  `}
  grid-column-gap: .75rem;
  grid-row-gap: 1.5rem;
`;

