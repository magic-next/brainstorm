import styled from 'styled-components';

export const FilterWrapper = styled.div`
  color: #000;
  h2 {
    font-size: 1.6rem;
  }
`;

export const FilterRowWrapper = styled.div`
  color: #000;
  margin-top: 2rem;
  h4 {
    margin-bottom: .5rem;
  }
  .colors {
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 1rem;
    .color-option {
      padding: 1rem;
      border: thin solid transparent;
      border-radius: 5px;
      &:hover {
        border: thin solid #ccc;
      }
    }
    span {
      margin-left: .5rem;
    }
  }
`;
