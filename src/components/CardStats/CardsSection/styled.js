import styled from 'styled-components';
import media from 'styled-media-query';
import Card from '../../Card';

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
  grid-column-gap: .75rem;
  grid-row-gap: 1.5rem;
`;

export const CardWrapper = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px -1px #333;
`;

export const CardNameWrapper = styled.em`
  color: #333;
  display: block;
  margin-top: .25rem;
  text-align: center;
  font-size: 1.25rem;
`;
