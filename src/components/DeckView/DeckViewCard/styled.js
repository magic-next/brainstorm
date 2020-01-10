import styled from 'styled-components';
import Card from '../../Card';

export const PreviewWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 25vw;
  margin-left: .5rem;
  margin-top: .5rem;
`;

export const CardWrapper = styled(Card)`
  img {
    border-radius: 13px;
  }
`;
