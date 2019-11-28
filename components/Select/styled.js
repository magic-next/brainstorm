import styled from 'styled-components';
import * as V from '../../styles';

export const SelectWrapper = styled.select`
  background-color: white;
  padding: .5rem 4rem .5rem 1rem;
  border-radius: 4px;
  font-size: 1.4rem;
  font-family: ${V.fonts.default};
  color: ${V.colors.primary};
  border: thin solid ${V.colors.primary};
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent url('/static/icons/arrow.svg') right center no-repeat !important;
  background-position: calc(100% - 1rem) center !important;
`;
