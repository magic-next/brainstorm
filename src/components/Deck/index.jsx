import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import DeckView from '../DeckView';

import DeckType from '../../types/Deck';
import CardType from '../../types/Card';
import * as S from './styled';

const Deck = ({ cards, deck }) => (
  <Container>
    <S.DeckWrapper>
      <DeckView
        cards={cards}
        deck={deck}
      />
    </S.DeckWrapper>
  </Container>
);

Deck.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
  deck: DeckType,
};

Deck.defaultProps = {
  deck: null,
};

export default Deck;
