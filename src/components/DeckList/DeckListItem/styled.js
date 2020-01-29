import styled from 'styled-components';

export const ItemWrapper = styled.tr`
  border-bottom: thin solid #E0DEE3;
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const ItemColumnWrapper = styled.td`
  padding: .5rem 0;
  align-items: stretch;
  button:not(:last-child) {
    margin-right: .5rem;
  }
  ${({ right }) => (!right ? '' : `
    text-align: right;
  `)}
  a {
    color: #333;
    display: block;
  }
  svg {
    width: 1rem;
    margin-right: .5rem;
  }
`;
