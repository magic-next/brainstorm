import styled from 'styled-components';
import Card from '../../Card';
import * as V from '../../../styles';

export const RankingWrapper = styled.div`
  a {
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    color: inherit;
    backface-visibility: hidden;
    transition: color .3s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${V.colors.primary};
    }
  }
`;

export const CardWrapper = styled(Card)`
  width: 100%;
  flex: 1;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: .5rem;
  display: flex;
  box-shadow: 0 0 10px -1px #333;
  img {
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: bold;
  margin: 0 auto;
`;

export const NameWrapper = styled.small`
  font-size: 1.4rem;
`;
