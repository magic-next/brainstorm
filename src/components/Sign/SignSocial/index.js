import styled, { css } from 'styled-components';
import Button from '../../Button';

const facebookColor = '#4e71ba';

const Facebook = css`
  background-color: ${facebookColor};
  border-color: ${facebookColor};
  color: white;
`;

export default styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ facebook }) => (!facebook ? '' : Facebook)}
  svg, img {
    width: 1.6rem;
    margin-right: .5rem;
  }
`;
