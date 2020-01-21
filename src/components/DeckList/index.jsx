import React from 'react';
import PropTypes from 'prop-types';

import DeckListItem from './DeckListItem';
import DeckType from '@/types/Deck';
import * as S from './styled';

const DeckList = ({ decks }) => (
  <S.ListWrapper>
    <thead>
      <tr>
        <td>Deck</td>
        <td>Ult. Atualização</td>
        <td colSpan="2" />
      </tr>
    </thead>
    <tbody>
      {decks.map((deck) => (
        <DeckListItem key={deck.id} deck={deck} />
      ))}
    </tbody>
  </S.ListWrapper>
);

DeckList.propTypes = {
  decks: PropTypes.arrayOf(DeckType),
};

DeckList.defaultProps = {
  decks: [],
};

export default DeckList;
