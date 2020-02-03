import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import CardType from '../../types/Card';
import { getImage } from '../../services/image';
import * as S from './styled';

const getImageFromCard = ({ card, version, face = 0 }) => {
  if (face > 0 && !get(card, `faces.${face}`)) {
    return null;
  }
  const url = getImage(card.name, version);
  const path = card.faces ? `faces.${face}` : 'images';
  return get(card, `${path}.${version}`, url);
};

const Card = ({ card, version, className }) => {
  const [flip, setFlip] = useState(false);
  const image = getImageFromCard({ card, version });
  const otherFace = getImageFromCard({ card, version, face: 1 });
  return (
    <S.Scene>
      {otherFace && (
        <button type="button" onClick={() => setFlip(!flip)}>TURN</button>
      )}
      <S.CardContainer className={`relative ${className} ${flip ? 'card-flip' : ''}`}>
        {otherFace && (
          <S.CardWrapper className="card card--back" src={otherFace} alt={`Card "${card.name}"`} />
        )}
        <S.CardWrapper className="card card--front" src={image} alt={`Card "${card.name}"`} />
      </S.CardContainer>
    </S.Scene>
  );
};

Card.propTypes = {
  card: CardType.isRequired,
  version: PropTypes.string,
  className: PropTypes.string,
};

Card.defaultProps = {
  version: 'png',
  className: '',
};

export default Card;
