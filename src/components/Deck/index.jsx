import React from 'react';
import PropTypes from 'prop-types';

import Container from '../Container';
import DeckView from '../DeckView';

import DeckType from '../../types/Deck';
import CardType from '../../types/Card';
import UserType from '../../types/User';
import * as S from './styled';

const Deck = ({ cards, deck, user }) => (
  <Container>
    <S.DeckWrapper>
      <DeckView
        user={user}
        cards={cards}
        deck={deck}
      />
    </S.DeckWrapper>
  </Container>
);

Deck.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
  deck: DeckType,
  user: UserType,
};

Deck.defaultProps = {
  deck: null,
  user: null,
};

export default Deck;
