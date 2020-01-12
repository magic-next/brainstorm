import React, { useState } from 'react';
import * as S from './styled';
import DeckType from '../../types/Deck';
import DeckViewCategory from './DeckViewCategory';
import DeckViewCard from './DeckViewCard';
import DeckViewCopy from './DeckViewCopy';

const DeckView = ({ deck }) => {
  const categories = Array.isArray(deck) ? [[null, deck]] : Object.entries(deck);
  const [card, setCard] = useState(null);
  return (
    <>
      <DeckViewCard card={card} />
      <S.CategoriesWrapper className="relative">
        <DeckViewCopy deckEntries={categories} />
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
    </>
  );
};

DeckView.propTypes = {
  deck: DeckType.isRequired,
};

export default DeckView;
