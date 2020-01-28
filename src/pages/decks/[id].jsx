import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import Layout from '@/components/Layout';
import DeckContainer from '@/containers/Deck';

import DeckType from '@/types/Deck';
import CardType from '@/types/Card';

import Cookie from '@/libs/cookie';
import { restore } from '@/libs/store';

import { getDeck } from '@/services/decks';

const Deck = ({ deck, cards }) => (
  <Layout title={deck.name}>
    <DeckContainer deck={deck} cards={cards} />
  </Layout>
);

Deck.propTypes = {
  deck: DeckType.isRequired,
  cards: PropTypes.arrayOf(CardType).isRequired,
};

Deck.getInitialProps = async (ctx) => {
  const cookies = new Cookie(ctx);
  const state = await restore({ cookies });
  const { query: { id: deckId } } = ctx;
  const token = get(state, 'user.token');
  const { deck, cards } = await getDeck({ deckId, token });
  return { deck, cards };
};

export default Deck;
