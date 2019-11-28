import styled, { css } from 'styled-components';
import * as V from '../../styles';

const verify = (prop, style, def = '') => (props) => {
  if (Array.isArray(prop)) {
    return prop.every((p) => props[p]) ? style : '';
  }
  return props[prop] ? style : def;
};

export const ButtonRounded = css`
  padding: 1.75rem 3rem;
  font-weight: bold;
  border-radius: 10rem;
  font-size: 1.4rem;
`;

export const ButtonType = (theme) => css`
  border-color: ${V.colors[theme]};
  color: ${V.colors[theme]};
`;

export const ButtonRoundedTheme = (theme) => css`
  color: white;
  background-color: ${V.colors[theme]};
`;

export const ButtonWrapper = styled.button`
  display: inline-block;
  text-decoration: none;
  background-color: white;
  border: thin solid #ccc;
  border-radius: 3px;
  font-family: ${V.fonts.default};
  padding: ${V.sizes.button.horizontal} ${V.sizes.button.vertical};
  ${verify('rounded', ButtonRounded)};
  ${verify('primary', ButtonType('primary'))};
  ${verify(['rounded', 'primary'], ButtonRoundedTheme('primary'))};
`;
