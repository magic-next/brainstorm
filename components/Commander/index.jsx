import React from 'react';

import Summary from './Summary';
import CardsSection from '../CardsSection';

import * as S from './styled';
import CommanderType from '../../types/Commander';

const perc = (card) => parseFloat(card.perc)
  .toFixed(2)
  .replace('.', ',');

const Commander = ({
  card,
  decks,
  distribuition,
  top,
}) => (
  <S.CommanderWrapper>
    <Summary
      card={card}
      decks={decks}
      distribuition={distribuition}
    />
    <CardsSection
      cards={top}
      title="Cards mais usadas"
      name={(card) => `Presente em ${perc(card)}%`}
    />
  </S.CommanderWrapper>
);

Commander.propTypes = CommanderType;

export default Commander;
