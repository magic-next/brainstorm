import styled from 'styled-components';
import * as V from '../../styles';

export const HeaderWrapper = styled.header`
  background-color: ${V.colors.primary};
`;

export const LogoWrapper = styled.section`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.img`
  height: 3rem;
`;

export const NameWrapper = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  display: inline-block;
`;
