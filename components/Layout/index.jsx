import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Container from '../Container';
import * as S from './style';

const Layout = ({ children }) => (
  <>
    <Header />
    <S.AppWrapper>
      <Container>
        {children}
      </Container>
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
