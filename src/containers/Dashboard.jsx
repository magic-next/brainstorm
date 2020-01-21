import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '@/components/Dashboard';

const DashboardContainer = (props) => (
  <Dashboard
    {...props}
  />
);

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(DashboardContainer);
