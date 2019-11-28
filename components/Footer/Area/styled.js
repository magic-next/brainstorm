import styled from 'styled-components';

export const AreaWrapper = styled.nav``;

export const TitleWrapper = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: .5rem;
`;

export const LinkWrapper = styled.a`
  color: white;
  transition: opacity .25s ease-in-out;
  display: block;
  margin-bottom: .5rem;
  font-size: 1.2rem;
  &:not(:hover) {
    opacity: .8;
  }
`;
