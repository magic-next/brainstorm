import styled from 'styled-components';
import * as V from '@/styles';

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

export const CurveWrapper = styled.section`
  margin-top: 1.5rem;
  text-transform: uppercase;
  ul {
    margin-top: .5rem;
    font-size: 1.25rem;
    small {
      color: #777;
      margin-right: .5rem;
    }
  }
  .cmc {
    cursor: help;
    margin: .25rem 0;
    display: flex;
    align-items: center;
    &__cost {
      width: 2.6rem;
      display: inline-block;
    }
  }
`;

export const BarWrapper = styled.div`
  border-radius: 2px;
  background-color: ${V.colors.primary};
  height: .9rem;
  width: ${({ count = 0 }) => count}%;
`;
