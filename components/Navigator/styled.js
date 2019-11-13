import styled from 'styled-components';

const color = ({ dark }) => (dark ? 'white' : 'inherit');

export const NavWrapper = styled.nav`
  ul {
    display: flex;
  }
  li {
    display: flex;
    align-items: center;
  }
  a {
    color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 0;
    padding: 1.25rem 0;
    svg {
      height: 1.5rem;
      margin-right: .5rem;
    }
  }
  .arrow {
    margin: 0 1rem;
  }
  svg {
    height: 2rem;
    color: ${color};
  }
`;
