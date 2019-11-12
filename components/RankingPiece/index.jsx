import React from 'react';
import * as S from './styled';
import RankingType from '../../types/Ranking';

const Piece = ({ ranking }) => {
  const { name } = ranking.card;
  const url = 'https://api.scryfall.com/cards/named';
  const scryfallImage = `${url}?exact=${name}&format=image&version=art_crop`;
  return (
    <S.ImageWrapper
      src={scryfallImage}
      alt={name}
    />
  );
}

Piece.propTypes = {
  ranking: RankingType.isRequired,
};

export default Piece;
