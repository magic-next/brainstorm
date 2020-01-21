import React from 'react';
import PropTypes from 'prop-types';

import Dashboard from '@/containers/Dashboard';
import Layout from '@/components/Layout';
import DeckList from '@/components/DeckList';

import { myDecks } from '@/services/decks';
import DeckType from '@/types/Deck';

const Me = ({ decks }) => (
  <Layout title="Minha Conta">
    <Dashboard>
      <DeckList decks={decks} />
    </Dashboard>
  </Layout>
);

Me.propTypes = {
  decks: PropTypes.arrayOf(
    DeckType,
  ),
};

Me.defaultProps = {
  decks: [],
};

Me.getInitialProps = async ({ req }) => {
  const { token } = req.session;
  const decks = await myDecks({ token });
  return { decks };
};

export default Me;
