import React, { useState } from 'react';
import * as S from './styled';
import DeckType from '../../types/Deck';
import DeckViewCategory from './DeckViewCategory';
import DeckViewCard from './DeckViewCard';
import DeckViewHeader from './DeckViewHeader';

const DeckView = ({ deck }) => {
  const categories = Array.isArray(deck) ? [[null, deck]] : Object.entries(deck);
  const [card, setCard] = useState(null);
  return (
    <S.DeckViewWrapper>
      <DeckViewCard card={card} />
      <DeckViewHeader deckEntries={categories} />
      <S.CategoriesWrapper className="relative">
        {categories.map(([category, cards]) => (
          <DeckViewCategory
            onEnterCard={(targetCard) => setCard(targetCard)}
            onLeaveCard={() => setCard(null)}
            key={category}
            category={category}
            cards={cards}
          />
        ))}
      </S.CategoriesWrapper>
    </S.DeckViewWrapper>
  );
};

DeckView.propTypes = {
  deck: DeckType.isRequired,
};

export default DeckView;
