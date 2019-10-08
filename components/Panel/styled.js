import styled from 'styled-components';

export const PanelWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
  grid-gap: .5rem;
`;
