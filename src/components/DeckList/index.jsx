import React from 'react';
import PropTypes from 'prop-types';

import DeckListItem from './DeckListItem';
import DeckType from '@/types/Deck';
import UserType from '@/types/User';
import * as S from './styled';

const DeckList = ({ decks, user }) => (
  <S.ListWrapper>
    <thead>
      <tr>
        <td>Deck</td>
        <td>Ult. Atualização</td>
        <td />
      </tr>
    </thead>
    <tbody>
      {decks.map((deck) => (
        <DeckListItem key={deck.id} deck={deck} user={user} />
      ))}
    </tbody>
  </S.ListWrapper>
);

DeckList.propTypes = {
  decks: PropTypes.arrayOf(DeckType),
  user: UserType,
};

DeckList.defaultProps = {
  decks: [],
  user: null,
};

export default DeckList;
