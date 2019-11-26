import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import * as S from './styled';
import content from './content';

const NavItem = ({ title, url, primary }) => (
  <li>
    <a href={url} className={primary ? 'primary' : ''} title={title}>
      {title}
    </a>
  </li>
);

NavItem.propTypes = {
  primary: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const Header = () => (
  <S.HeaderWrapper>
    <S.Container>
      <div className="flex-1" />
      <S.NavWrapper>
        <ul>
          {content.map((item) => (
            <NavItem
              primary={!!item.primary}
              title={item.title}
              url={item.url}
              key={item.title}
            />
          ))}
        </ul>
      </S.NavWrapper>
    </S.Container>
  </S.HeaderWrapper>
);

export default Header;
