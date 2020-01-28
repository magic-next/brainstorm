import styled, { css } from 'styled-components';
import media from 'styled-media-query';

const ContainerFluid = css`
  width: auto;
  ${media.greaterThan('medium')`
    width: auto;
  `}
`;

export default styled.div`
  margin: auto;
  width: 90%;
  ${media.greaterThan('medium')`
    width: 75%;
  `}
  ${({ fluid }) => (fluid ? ContainerFluid : '')}
`;
