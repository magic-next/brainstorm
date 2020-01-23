import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import CardType from '@/types/Card';
import CardSymbols from '@/components/CardSymbols';

import { types } from '@/utils';
import * as S from './styled';

const cardsCount = (cards) => cards.reduce((p, card) => p + card.count, 0);

const Category = ({
  category,
  cards,
  onEnterCard,
  onLeaveCard,
}) => {
  const [count, setCount] = useState(cardsCount(cards));
  useEffect(() => {
    const countSum = cardsCount(cards);
    setCount(countSum);
  }, [cards]);

  return (
    <S.CategoryWrapper>
      {category && (
        <h2 className="category-title">
          {`${types[category] || category}s (${count})`}
        </h2>
      )}
      <ul className="cards-category">
        {cards.map((card) => (
          <li
            key={card.id}
            onMouseEnter={() => onEnterCard(card)}
            onMouseLeave={() => onLeaveCard(card)}
          >
            <span className="cards-category__card-count">{card.count}</span>
            <Link href={`/card/${card.id}`}>
              <a className="link link--primary cards-category__card flex-1">
                {card.portugueseName || card.name}
              </a>
            </Link>
            {card.manaCost && (
              <CardSymbols size="small" shadow text={card.manaCost} />
            )}
          </li>
        ))}
      </ul>
    </S.CategoryWrapper>
  );
};

Category.propTypes = {
  category: PropTypes.string,
  cards: PropTypes.arrayOf(CardType),
  onEnterCard: PropTypes.func,
  onLeaveCard: PropTypes.func,
};

Category.defaultProps = {
  category: '',
  cards: [],
  onEnterCard: () => null,
  onLeaveCard: () => null,
};

export default Category;
