import styled from 'styled-components';

export const SummaryWrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 5fr 4fr;
  grid-column-gap: 1rem;
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
  h1 {
    font-size: 2.25rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  h4 {
    margin: 1rem 0;
  }
`;
