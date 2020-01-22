import React from 'react';
import PropTypes from 'prop-types';

import Layout from '@/components/Layout';
import DeckView from '@/containers/DeckView';

import DeckType from '@/types/Deck';
import CardType from '@/types/Card';

import { getDeck } from '@/services/decks';

const Deck = ({ deck, cards }) => (
  <Layout title={deck.name}>
    <DeckView cards={cards} />
  </Layout>
);

Deck.propTypes = {
  deck: DeckType.isRequired,
  cards: PropTypes.arrayOf(CardType).isRequired,
};

Deck.getInitialProps = async ({ query: { deckId }, res, req }) => {
  if (!deckId) {
    res.redirect('/commanders');
  }
  const { token } = req.session;
  const { deck, cards } = await getDeck({ deckId, token });
  return { deck, cards };
};

export default Deck;
