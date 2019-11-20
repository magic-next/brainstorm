import React from 'react';
import Link from 'next/link';
import * as S from './styled';
import RankingType from '../../types/Ranking';

const Piece = ({ ranking }) => {
  const { name } = ranking.card;
  const url = 'https://api.scryfall.com/cards/named';
  const scryfallImage = `${url}?exact=${name}&format=image&version=art_crop`;
  return (
    <S.RankingWrapper>
      <Link href={`/commander/${ranking.card.id}`}>
        <a>
          <S.ImageWrapper
            src={scryfallImage}
            alt={name}
          />
          <S.NameWrapper>{name}</S.NameWrapper>
          <S.TextWrapper>{`${ranking.count} decks`}</S.TextWrapper>
        </a>
      </Link>
    </S.RankingWrapper>
  );
};

Piece.propTypes = {
  ranking: RankingType.isRequired,
};

export default Piece;
