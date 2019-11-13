import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Navigator from '../Navigator';
import NavLinkType from '../../types/NavLink';
import * as S from './style';

const Layout = ({ children, path, darkNavigator }) => (
  <>
    <Header />
    <Navigator path={path} dark={darkNavigator} />
    <S.AppWrapper>
      {children}
    </S.AppWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
  path: PropTypes.arrayOf(NavLinkType),
  darkNavigator: PropTypes.bool,
};

Layout.defaultProps = {
  children: null,
  darkNavigator: false,
  style: {},
  path: [],
};

export default Layout;
