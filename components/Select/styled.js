import styled from 'styled-components';
import * as V from '../../styles';

export const SelectWrapper = styled.select`
  background-color: white;
  padding: ${V.sizes.button.horizontal} 4rem ${V.sizes.button.horizontal} ${V.sizes.button.vertical};
  border-radius: 4px;
  font-size: 1.4rem;
  font-family: ${V.fonts.default};
  color: ${V.colors.primary};
  border: thin solid ${V.colors.primary};
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent url('/icons/arrow.svg') right center no-repeat !important;
  background-position: calc(100% - 1rem) center !important;
`;
