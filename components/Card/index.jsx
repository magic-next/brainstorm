import React from 'react';
import * as S from './styled';
import CardType from '../../types/Card';

const Card = ({ card }) => (
  <S.CardWrapper src={card.image_uris.art_crop} alt={`Card "${card.name}"`} />
);

Card.propTypes = {
  card: CardType.isRequired,
};

export default Card;
