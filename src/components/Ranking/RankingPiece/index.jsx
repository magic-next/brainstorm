import React from 'react';
import Link from 'next/link';

import * as S from './styled';
import RankingType from '../../../types/Ranking';

const getName = (card) => {
  const fallback = card.name;
  if (!card.foreign_data) return fallback;
  if (!card.foreign_data.pt) return fallback;
  if (!card.foreign_data.pt.name) return fallback;
  return card.foreign_data.pt.name;
}

const Piece = ({ ranking }) => {
  const name = getName(ranking);
  return (
    <S.RankingWrapper>
      <Link href={`/card/${ranking.slug}`}>
        <a>
          <S.CardWrapper
            version="normal"
            card={ranking}
          />
          <S.NameWrapper>{name}</S.NameWrapper>
          {ranking.count && (
            <S.TextWrapper>{`${ranking.count} decks`}</S.TextWrapper>
          )}
        </a>
      </Link>
    </S.RankingWrapper>
  );
};

Piece.propTypes = {
  ranking: RankingType.isRequired,
};

export default Piece;
