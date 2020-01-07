import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import CardType from '../../types/Card';
import { getImage } from '../../services/image';
import * as S from './styled';

const Card = ({ card, version, className }) => {
  const url = getImage(card.name, version);
  const image = get(card, `images.${version}`, url);
  return (
    <div className={className}>
      <S.CardWrapper src={image} alt={`Card "${card.name}"`} />
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
