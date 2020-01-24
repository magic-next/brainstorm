import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

import CardType from '../../types/Card';
import DeckType from '../../types/Deck';
import UserType from '../../types/User';

import DeckViewCategory from './DeckViewCategory';
import DeckViewCard from './DeckViewCard';
import DeckViewHeader from './DeckViewHeader';

const getType = (card) => {
  if (card.extra === 'commander') {
    return 'Commander';
  }
  if (card.types.includes('Land')) {
    return 'Land';
  }
  return card.types[0];
};

const DeckView = ({ cards, deck, user }) => {
  const group = {};
  cards.forEach((card) => {
    const type = getType(card);
    if (!group[type]) {
      group[type] = [];
    }
    group[type].push(card);
  });
  const { Commander, Land, ...rest } = group;
  const categories = Object.entries({ Commander, ...rest, Land });
  const [card, setCard] = useState(null);
  console.log(deck, user);
  return (
    <S.DeckViewWrapper>
      <DeckViewCard card={card} />
      <S.DeckViewSections>
        {deck && (
          <S.SummaryWrapper deck={deck} cards={cards} />
        )}
        <div>
          <DeckViewHeader
            deckEntries={categories}
            deck={deck}
            user={user}
          />
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
        </div>
      </S.DeckViewSections>
    </S.DeckViewWrapper>
  );
};

DeckView.propTypes = {
  cards: PropTypes.arrayOf(CardType),
  deck: DeckType,
  user: UserType,
};

DeckView.defaultProps = {
  cards: [],
  deck: null,
  user: null,
};

export default DeckView;
