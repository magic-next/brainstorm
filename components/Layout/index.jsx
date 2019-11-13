import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Navigator from '../Navigator';
import NavLinkType from '../../types/NavLink';
import * as S from './style';

const Layout = ({ children, path }) => (
  <>
    <Header />
    <Navigator path={path} />
    <S.AppWrapper>
      {children}
    </S.AppWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
  path: PropTypes.arrayOf(NavLinkType),
};

Layout.defaultProps = {
  children: null,
  style: {},
  path: [],
};

export default Layout;
