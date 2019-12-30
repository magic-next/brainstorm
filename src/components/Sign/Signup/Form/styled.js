import styled from 'styled-components';
import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt';
import * as V from '../../../../styles';

export const Separator = styled.div`
  margin: 2rem 0;
  font-weight: 300;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  span {
    margin: 0 1rem;
  }
  &::before, &::after {
    content: '';
    display: block;
    height: 0;
    flex: 1;
    border-top: thin solid #999;
  }
`;

export const Loader = styled(LoaderAlt)`
  fill: ${V.colors.primary};
  width: 1.5rem;
  margin-right: .75rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
`;
