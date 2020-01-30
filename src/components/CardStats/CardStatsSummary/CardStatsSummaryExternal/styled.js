import styled from 'styled-components';
import * as V from '@/styles';
import Button from '@/components/Button';

export const LinksWrapper = styled.div`
  margin-top: 2rem;
`;

export const ExternalWrapper = styled(Button)`
  color: ${V.colors.external.ligamagic};
  border-color: ${V.colors.external.ligamagic};
  align-items: center;
  &, .flex {
    justify-content: flex-start;
    align-items: center;
  }
  img {
    height: 1.8rem;
    margin-right: .5rem;
  }
`;
