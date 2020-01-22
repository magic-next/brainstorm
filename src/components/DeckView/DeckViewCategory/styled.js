import styled from 'styled-components';

const size = '1.5rem';

export const CategoryWrapper = styled.article`
  width: 100%;
  margin-bottom: 3rem;
  font-size: 1.4rem;
  abbr {
    width: ${size};
    height: ${size};
    font-size: 1.5rem;
  }
  .category-title {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: .25rem;
  }
  .cards-category {
    &__card-count {
      margin-right: .5rem;
    }
    li {
      display: flex;
      align-items: center;
      margin: .25rem 0;
    }
    a:not(:hover) {
      color: #333;
    }
  }
`;
