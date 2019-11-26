import styled from 'styled-components';
import media from 'styled-media-query';

export const SummaryWrapper = styled.section`
  display: grid;
  ${media.greaterThan('medium')`
    grid-template-columns: 3fr 5fr 4fr;
  `}
  grid-column-gap: 1rem;
  margin-bottom: 4rem;
`;

export const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
  p {
    text-align: center;
    margin-top: .5rem;
    font-size: 1.4rem;
  }
`;

export const BottomWrapper = styled.span`
  font-weight: 500;
`;

export const TextWrapper = styled.article`
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  em {
    font-style: italic;
  }
  p {
    margin-top: 1rem;
    line-height: 1.8rem;
  }
  h4 {
    margin: 1rem 0;
  }
`;