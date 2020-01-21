import React from 'react';

import DeckType from '@/types/Deck';
import * as S from './styled';

const DeckListItem = ({ deck }) => (
  <S.ItemWrapper>
    <S.ItemColumnWrapper>{deck.name}</S.ItemColumnWrapper>
    <S.ItemColumnWrapper>{deck.updatedAt}</S.ItemColumnWrapper>
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
