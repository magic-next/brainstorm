import styled from 'styled-components';
import Button from '@/components/Button';

export const LinksWrapper = styled.div`
  margin-top: .75rem;
  &:first-child {
    margin-top: 3rem;
  }
`;

export const ExternalWrapper = styled(Button)`
  ${({ color }) => (!color ? '' : `
    color: ${color};
    border-color: ${color};
  `)}
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
