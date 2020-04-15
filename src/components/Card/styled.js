import styled from 'styled-components';

const size = '4.7rem';
const verify = (first, second) => ({ flipped }) => (
  flipped ? first : second
);

export const FlipButton = styled.button`
  display: block;
  transition: all .3s ease-in-out;
  background-color: ${verify('#000', '#fff')};
  color: ${verify('#fff', '#000')};
  box-shadow: 0 0 10px 0 #000;
  position: absolute;
  z-index: 5;
  border-radius: 50%;
  top: 25%;
  right: 1.5rem;
  border: 2px solid ${verify('#fff', '#000')};
  height: ${size};
  width: ${size};
  &:not(:hover) {
    opacity: .6;
  }
`;

export const Scene = styled.div`
  perspective: 900px;
`;

export const CardContainer = styled.div`
  position: relative;
  transition: transform .5s linear;
  transform-style: preserve-3d;
  background-color: #000;
  border-radius: 10px;
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
