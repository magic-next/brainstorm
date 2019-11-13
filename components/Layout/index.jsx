import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import * as S from './style';

const Layout = ({ children }) => (
  <>
    <Header />
    <S.AppWrapper>
      {children}
    </S.AppWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({}),
};

Layout.defaultProps = {
  children: null,
  style: {},
};

export default Layout;
