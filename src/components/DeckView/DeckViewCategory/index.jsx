import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import CardType from '@/types/Card';
import { types } from '@/utils';
import * as S from './styled';

const Category = ({
  category,
  cards,
  onEnterCard,
  onLeaveCard,
}) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const countSum = cards.reduce((p, card) => p + card.count, 0);
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
          <li key={card.id}>
            <span className="cards-category__card-count">{card.count}</span>
            <Link href={`/card/${card.id}`}>
              <a
                onMouseEnter={() => onEnterCard(card)}
                onMouseLeave={() => onLeaveCard(card)}
                className="link link--primary cards-category__card"
              >
                {card.portugueseName || card.name}
              </a>
            </Link>
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
