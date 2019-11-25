import styled from 'styled-components';

export const SectionWrapper = styled.section``;

const columnsNumber = ({ columns = 5 }) => columns;

export const GridWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(${columnsNumber}, 1fr);
  grid-column-gap: .5rem;
  grid-row-gap: 1.5rem;
`;

export const CardNameWrapper = styled.em`
  display: block;
  margin-top: .25rem;
  text-align: center;
  font-size: 1.25rem;
`;
