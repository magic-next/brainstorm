import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Area = ({ title, links }) => (
  <S.AreaWrapper>
    <S.TitleWrapper>{title}</S.TitleWrapper>
    <ul>
      {links.map((link) => (
        <li key={link.title}>
          <S.LinkWrapper href={link.url}>{link.title}</S.LinkWrapper>
        </li>
      ))}
    </ul>
  </S.AreaWrapper>
);

Area.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

Area.defaultProps = {
  title: null,
  links: [],
};

export default Area;
