import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import CardType from '../../types/Card';
import Card from '../Card';

const Panel = ({ cards }) => (
  <S.PanelWrapper columns={5}>
    {cards.map((card, index) => (
      <Card
        key={index.toString()}
        card={card}
      />
    ))}
  </S.PanelWrapper>
);

Panel.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
};

export default Panel;
