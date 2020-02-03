import styled from 'styled-components';

export const Scene = styled.div`
  perspective: 900px;
  button {
    display: block;
    position: absolute;
    z-index: 9;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  transition: transform .5s linear;
  transform-style: preserve-3d;
  &.card-flip {
    transform: rotateY(180deg);
  }
`;

export const CardWrapper = styled.img`
  width: 100%;
  z-index: 2;
  position: inherit;
  &.card--front {
    backface-visibility: hidden;
  }
  &.card--back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: scaleX(-1);
  }
`;
