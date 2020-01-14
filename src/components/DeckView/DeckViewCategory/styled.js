import styled from 'styled-components';

export const CategoryWrapper = styled.article`
  width: 100%;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  .category-title {
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: .25rem;
  }
  .cards-category {
    &__card-count {
      margin-right: .5rem;
    }
    a:not(:hover) {
      color: #333;
    }
  }
`;
