import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Card from '../components/Card';
import CardType from '../types/Card';

const Main = ({ cards = [] }) => (
  <div>
    {cards.map((card) => (
      <Card card={card} />
    ))}
  </div>
);

Main.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
};

Main.getInitialProps = async () => {
  const cardFetch = () => fetch('https://api.scryfall.com/cards/random?is:commander')
    .then((res) => res.json());
  const promises = [...new Array(9)].map(cardFetch);
  const cards = await Promise.all(promises);
  return { cards };
};

export default Main;
