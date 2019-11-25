import styled from 'styled-components';
import Card from '../Card';
import * as V from '../../styles';

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
  object-fit: cover;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: .5rem;
`;

export const TextWrapper = styled.div`
  font-size: 1.6rem;
  margin: .5rem auto;
`;

export const NameWrapper = styled.small`
  font-size: 1.25rem;
`;
