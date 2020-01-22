import React from 'react';
import { connect } from 'react-redux';
import DeckView from '@/components/DeckView';

const DeckViewContainer = (props) => (
  <DeckView
    {...props}
  />
);

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default connect(mapStateToProps)(DeckViewContainer);
