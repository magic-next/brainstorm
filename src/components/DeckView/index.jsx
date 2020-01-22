import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

import CardType from '../../types/Card';
import DeckViewCategory from './DeckViewCategory';
import DeckViewCard from './DeckViewCard';
import DeckViewHeader from './DeckViewHeader';

const DeckView = ({ cards }) => {
  const group = {};
  cards.forEach((card) => {
    const type = card.extra === 'commander' ? 'Commander' : card.types[0];
    if (!group[type]) {
      group[type] = [];
    }
    group[type].push(card);
  });
  const { Commander, ...rest } = group;
  const categories = Object.entries({ Commander, ...rest });
  const [card, setCard] = useState(null);
  return (
    <S.DeckViewWrapper>
      <DeckViewCard card={card} />
      <DeckViewHeader deckEntries={categories} />
      <S.CategoriesWrapper className="relative">
        {categories.map(([category, categoryCards]) => (
          <DeckViewCategory
            onEnterCard={(targetCard) => setCard(targetCard)}
            onLeaveCard={() => setCard(null)}
            key={category}
            category={category}
            cards={categoryCards}
          />
        ))}
      </S.CategoriesWrapper>
    </S.DeckViewWrapper>
  );
};

DeckView.propTypes = {
  cards: PropTypes.arrayOf(CardType),
};

DeckView.defaultProps = {
  cards: [],
};

export default DeckView;
