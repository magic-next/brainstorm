import React from 'react';
import PropTypes from 'prop-types';

import CardType from '../../types/Card';
import { getImage } from '../../services/image';
import * as S from './styled';

const Card = ({ card, version, className }) => {
  const url = getImage(card.name, version);
  return (
    <div className={className}>
      <S.CardWrapper src={url} alt={`Card "${card.name}"`} />
    </div>
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
