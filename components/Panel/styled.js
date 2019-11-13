import styled from 'styled-components';

export const PanelWrapper = styled.main`
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
  grid-column-gap: .5rem;
  grid-row-gap: 2rem;
`;
