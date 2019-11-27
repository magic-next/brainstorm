import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Header from '../Header';
import * as S from './style';

const Layout = ({
  children,
  title,
}) => (
  <>
    <Head>
      <title>{`${title ? `${title} | ` : ''} Magic Next`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <S.AppWrapper>
      {children}
    </S.AppWrapper>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.shape({}),
};

Layout.defaultProps = {
  title: '',
  children: null,
  style: {},
};

export default Layout;
