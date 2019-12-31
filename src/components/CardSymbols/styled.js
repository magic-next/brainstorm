import styled, { css } from 'styled-components';


const Num = css`
  background-color: #cac5c0ff;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 1.8rem;
`;

const size = '2rem';
export const AbbrWrapper = styled.abbr`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${size};
  overflow: hidden;
  height: ${size};
  border-radius: 50%;
  margin-right: .25rem;
  box-shadow: 1px 1px 0 0px #000;
  ${({ type }) => (type === 'N' ? null : css`
    text-indent: 200%;
    background-image: url('/icons/cards/${(props) => props.type}.svg');
  `)}
  ${({ type }) => (type !== 'T' ? null : css`
    width: 1.6rem;
    height: 1.6rem;
    margin: .5rem .25rem .25rem 0;
  `)}
  ${({ type }) => (type === 'N' ? Num : null)}
`;
