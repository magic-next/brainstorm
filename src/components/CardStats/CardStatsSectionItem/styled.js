import styled from 'styled-components';
import Card from '../../Card';

export const GridItemWrapper = styled.div`
  .card-section__item {
    &--multiple {
      height: 100%;
    }
    &__card {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      flex: 1;
      height: 100%;
    }
    &--multiple a {
      position: inherit;
      z-index: 2;
      display: block;
      width: 92%;
      &:nth-child(2) {
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
      }
      &:hover {
        z-index: 3;
      }
    }
  }
`;

export const CardWrapper = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px -1px #333;
`;

export const CardNameWrapper = styled.em`
  color: #333;
  display: block;
  margin-top: .5rem;
  text-align: center;
  font-size: 1.3rem;
  strong {
    font-weight: bold;
    &:first-child {
      display: block;
      max-width: 100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;
