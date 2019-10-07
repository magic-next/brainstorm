import React from 'react';

import CardType from '../../types/Card';

const Card = ({ card }) => (
  <pre>{JSON.stringify(card)}</pre>
);

Card.propTypes = {
  card: CardType.isRequired,
};

export default Card;
