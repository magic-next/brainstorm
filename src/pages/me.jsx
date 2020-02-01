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

import { setUser } from '../store/actions/user';

import ApiContext from '@/contexts/Api';

const Me = ({ decks, apiUrl }) => (
  <ApiContext.Provider value={{ apiUrl }}>
    <Layout title="Minha Conta">
      <Dashboard>
        {(props) => <DeckList decks={decks} {...props} />}
      </Dashboard>
    </Layout>
  </ApiContext.Provider>
);

Me.propTypes = {
  apiUrl: PropTypes.string.isRequired,
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
  const apiUrl = process.env.API_URL;
  if (!token) {
    app.redirect('/signin');
    return {};
  }
  const user = get(state, 'user.user');
  ctx.store.dispatch(setUser(user));

  const decks = await myDecks({ token });
  return { decks, apiUrl };
};

export default Me;
