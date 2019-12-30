import React from 'react';
import PropTypes from 'prop-types';
import { User } from 'styled-icons/boxicons-regular/User';
import Container from '../Container';
import SearchBox from './SearchBox';

import content from './content';
import * as S from './styled';
import Icons from './icons';

const NavItem = ({ title, url, icon }) => {
  const Icon = Icons[icon];
  return (
    <li>
      <a href={url}>
        <Icon className="nav-item" />
        <span>
          {title}
        </span>
      </a>
    </li>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Header = () => (
  <>
    <S.HeaderWrapper>
      <Container className="flex">
        <S.LogoWrapper>
          <a href="/" title="Magic Next">
            <S.ImageWrapper alt="Magic Next Logo" src="/images/logo.svg" />
          </a>
        </S.LogoWrapper>
        <SearchBox />
        <S.NavWrapper>
          <ul>
            {content.map((item) => (
              <NavItem
                key={item.url}
                url={item.url}
                title={item.title}
                icon={item.icon}
              />
            ))}
            <li>
              <a href="/signin" title="Entrar">
                <User />
              </a>
            </li>
          </ul>
        </S.NavWrapper>
      </Container>
    </S.HeaderWrapper>
  </>
);

export default Header;
