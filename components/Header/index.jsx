import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'styled-icons/boxicons-regular/Search';
import Container from '../Container';

import content from './content';
import * as S from './styled';
import Icons from './icons';

const NavItem = ({ title, url, icon }) => {
  const Icon = Icons[icon];
  return (
    <li>
      <a href={url} title={title}>
        <Icon />
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
            <S.ImageWrapper alt="Magic Next Logo" src="/static/images/logo.svg" />
          </a>
        </S.LogoWrapper>
        <S.SearchWrapper>
          <Search />
          <input type="text" placeholder="Pesquisar carta..." />
        </S.SearchWrapper>
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
          </ul>
        </S.NavWrapper>
      </Container>
    </S.HeaderWrapper>
  </>
);

export default Header;
