import styled from 'styled-components';
import media from 'styled-media-query';

export const SectionWrapper = styled.section`
  ${media.greaterThan('medium')`
    margin-bottom: 3rem;
  `}
`;

export const GridWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  ${media.greaterThan('medium')`
    grid-template-columns: repeat(5, 1fr);
  `}
  grid-column-gap: .5rem;
  grid-row-gap: 1.5rem;
`;

export const CardNameWrapper = styled.em`
  color: #333;
  display: block;
  margin-top: .25rem;
  text-align: center;
  font-size: 1.25rem;
`;
