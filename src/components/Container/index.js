import styled from 'styled-components';
import media from 'styled-media-query';

export default styled.div`
  margin: auto;
  width: 90%;
  ${media.greaterThan('medium')`
    width: 75%;
  `}
`;
