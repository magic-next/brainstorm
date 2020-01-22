import styled from 'styled-components';

export const SummaryWrapper = styled.nav`
  .back-area {
    padding-bottom: 1rem;
  }
  h1 {
    font-weight: 700;
    font-size: 2rem;
    margin: 1rem 0;
  }
  h2 {
    font-size: 1.4rem;
    line-height: 2rem;
    strong {
      margin: 0 .25rem;
      &.format {
        text-transform: capitalize;
        display: inline-block;
      }
    }
  }
`;
