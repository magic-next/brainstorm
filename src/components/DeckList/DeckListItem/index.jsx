import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import DeckType from '@/types/Deck';
import * as S from './styled';

const ColumnLink = ({ deckId, children }) => (
  <Link href={`/decks/${deckId}`}>
    <a>
      {children}
    </a>
  </Link>
);

ColumnLink.propTypes = {
  deckId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const DeckListItem = ({ deck }) => (
  <S.ItemWrapper>
    <S.ItemColumnWrapper>
      <ColumnLink deckId={deck.id}>
        {deck.name}
      </ColumnLink>
    </S.ItemColumnWrapper>
    <S.ItemColumnWrapper>
      <ColumnLink deckId={deck.id}>
        {deck.updatedAt}
      </ColumnLink>
    </S.ItemColumnWrapper>
    <S.ItemColumnWrapper>
      <button type="button">Editar</button>
    </S.ItemColumnWrapper>
    <S.ItemColumnWrapper>
      <button type="button">Excluir</button>
    </S.ItemColumnWrapper>
  </S.ItemWrapper>
);

DeckListItem.propTypes = {
  deck: DeckType.isRequired,
};

export default DeckListItem;
