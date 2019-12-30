import styled from 'styled-components';
import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt';
import * as V from '../../styles';

const opt = (prop, def) => (props) => props[prop] || def;

export default styled(LoaderAlt)`
  fill: ${opt('color', V.colors.primary)};
  width: ${opt('width', '1.5rem')};
  margin-right: .75rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
`;
