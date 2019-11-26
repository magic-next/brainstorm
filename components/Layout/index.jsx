import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../Header';
import Navigator from '../Navigator';
import NavLinkType from '../../types/NavLink';
import * as S from './style';

const Layout = ({
  children,
  path,
  darkNavigator,
  title,
}) => (
  <>
    <Head>
      <title>{`${title ? `${title} | ` : ''} Magic Next`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <Navigator path={path} dark={darkNavigator} />
    <S.AppWrapper>
      {children}
    </S.AppWrapper>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.shape({}),
  path: PropTypes.arrayOf(NavLinkType),
  darkNavigator: PropTypes.bool,
};

Layout.defaultProps = {
  title: '',
  children: null,
  darkNavigator: false,
  style: {},
  path: [],
};

export default Layout;
