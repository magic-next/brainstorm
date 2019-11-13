import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'styled-icons/boxicons-regular/ChevronRight';
import Icons from './icons';

import Nav from '../Nav';
import Container from '../Container';

import NavLinkType from '../../types/NavLink';
import * as S from './styled';

const NavItem = ({ name, last, icon }) => {
  const Icon = Icons[icon];
  return (
    <li>
      <a href="/" title={name}>
        {icon && (<Icon />)}
        {name}
      </a>
      {!last && (
        <ChevronRight className="arrow" />
      )}
    </li>
  );
};

NavItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

NavItem.defaultProps = {
  icon: null,
  last: false,
};

const Navigator = ({ path, dark }) => {
  if (!path.length) {
    return null;
  }
  return (
    <Nav flat dark={dark}>
      <S.NavWrapper dark={dark}>
        <Container>
          <ul>
            {path.map((link, index) => (
              <NavItem
                name={link.name}
                icon={link.icon}
                key={index.toString()}
                last={index === path.length - 1}
              />
            ))}
          </ul>
        </Container>
      </S.NavWrapper>
    </Nav>
  );
};

Navigator.propTypes = {
  path: PropTypes.arrayOf(NavLinkType).isRequired,
  dark: PropTypes.bool,
};

Navigator.defaultProps = {
  dark: false,
};

export default Navigator;
