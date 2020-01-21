import React from 'react';
import PropTypes from 'prop-types';
import DashboardMenu from './DashboardMenu';

import * as S from './styled';

const Dashboard = ({ children }) => (
  <S.DashboardWrapper>
    <DashboardMenu />
    <div>
      {children}
    </div>
  </S.DashboardWrapper>
);

Dashboard.propTypes = {
  children: PropTypes.node,
};

Dashboard.defaultProps = {
  children: null,
};

export default Dashboard;
