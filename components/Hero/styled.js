import styled from 'styled-components';
import * as V from '../../styles';

export const HeroWrapper = styled.header`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 90%;
  margin: auto;
`;

export const HeroTextWrapper = styled.div`
  flex: 1;
  * {
    margin-bottom: 2rem;
  }
  h1 {
    color: ${V.colors.primary};
    font-size: 4rem;
    font-weight: bold;
    line-height: 5rem;
    text-transform: uppercase;
  }
  h2 {
    line-height: 2.5rem;
    color: #333;
    padding-right: 3rem;
  }
`;

export const LogoWrapper = styled.section`
  flex: 1;
  text-align: center;
  img {
    max-height: 80vh;
  }
`;
