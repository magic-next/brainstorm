import styled, { css } from 'styled-components';
import * as V from '../../styles';

const verify = (prop, style, def = '') => (props) => {
  if (Array.isArray(prop)) {
    return prop.every((p) => props[p]) ? style : '';
  }
  return props[prop] ? style : def;
};

const verifyProp = (prop, def = null) => (
  (props) => props[prop] || def
);

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

export const ButtonFlat = (theme) => css`
  background-color: ${V.colors[theme]};
  color: white;
`;

export const ButtonMin = () => css`
  font-size: 1.2rem;
  padding: .3rem .75rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBlock = css`
  width: 100%;
`;

export const ButtonWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: white;
  border: thin solid ${verifyProp('color', '#ccc')};
  color: ${verifyProp('color', '#555')};
  border-radius: 3px;
  font-family: ${V.fonts.default};
  padding: ${V.sizes.button.horizontal} ${V.sizes.button.vertical};
  ${verify('rounded', ButtonRounded)};
  ${verify('block', ButtonBlock)};
  ${verify('primary', ButtonType('primary'))};
  ${verify('secondary', ButtonType('secondary'))};
  ${verify(['rounded', 'primary'], ButtonRoundedTheme('primary'))};
  ${verify(['flat', 'primary'], ButtonFlat('primary'))};
  ${verify(['flat', 'secondary'], ButtonFlat('secondary'))};
  ${verify('small', ButtonMin)};
  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
  &:active {
    box-shadow: 0 0 6px -2px #333 inset;
  }
`;
