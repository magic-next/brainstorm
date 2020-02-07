import styled from 'styled-components';
import * as V from '@/styles';

const padding = '2rem';

export const FilterWrapper = styled.div`
  margin-top: 2rem;
  .ranking-filter {
    font-size: 1.4rem;
    align-items: center;
    color: ${V.colors.primary};
  }
  svg {
    width: 1.6rem;
    margin-right: .5rem;
  }
  .dropdown {
    color: #000;
    font-size: 1.4rem;
    border-radius: .4rem;
    background-color: white;
    position: absolute;
    margin-top: 1rem;
    top: 100%;
    min-width: 100%;
    white-space: nowrap;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, .5);
    padding: 1rem 0;
    z-index: 10;
    &:not(.dropdown--active) {
      display: none;
    }
    .color-combination {
      margin-left: 1rem;
    }
    &--item {
      color: #000;
      padding: .5rem ${padding};
      cursor: pointer;
      display: block;
      &:hover {
        background-color: rgba(0, 0, 0, .1)
      }
      .dropdown {
        top: 0;
        left: 100%;
        margin-top: -0.5rem;
        margin-left: -0.25rem;
      }
    }
  }
`;
