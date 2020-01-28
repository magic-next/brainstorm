import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';

import Dashboard from '@/containers/Dashboard';
import Layout from '@/components/Layout';
import DeckList from '@/components/DeckList';

import { myDecks } from '@/services/decks';
import DeckType from '@/types/Deck';

import Cookie from '@/libs/cookie';
import NextLib from '@/libs/next';
import { restore } from '@/libs/store';

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

Me.getInitialProps = async (ctx) => {
  const cookies = new Cookie(ctx);
  const app = new NextLib(ctx);
  const state = await restore({ cookies, ctx });
  const token = get(state, 'user.token');
  if (!token) {
    app.redirect('/signin');
    return {};
  }
  const decks = await myDecks({ token });
  return { decks };
};

export default Me;
