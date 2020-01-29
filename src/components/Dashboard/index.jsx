import React from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/Container';
import DashboardSideMenu from './DashboardSideMenu';

import UserType from '@/types/User';

import * as S from './styled';

const Dashboard = ({ children, user }) => (
  <div className="flex">
    <Container>
      <S.DashboardWrapper>
        <DashboardSideMenu user={user} />
        <div>
          {typeof children === 'function' ? children({ user }) : children}
        </div>
      </S.DashboardWrapper>
    </Container>
  </div>
);

Dashboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  user: UserType.isRequired,
};

Dashboard.defaultProps = {
  children: null,
};

export default Dashboard;
