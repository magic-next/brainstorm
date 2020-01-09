import React from 'react';
import { get } from 'lodash';

import Summary from './CardStatsSummary';
import CardsSection from './CardsSection';

import * as S from './styled';
import CardDetailsType from '../../types/CardDetails';

const perc = (card) => parseFloat(card.perc)
  .toFixed(2)
  .replace('.', ',');

const nameFormatter = (cardData) => `Presente em ${perc(cardData)}%`;

const Commander = ({
  card,
  decks,
  distribuition,
  top,
  commanders,
  topTypes,
}) => (
  <S.CardWrapper>
    <Summary
      card={card}
      decks={decks}
      distribuition={distribuition}
    />
    {!commanders ? null : (
      <CardsSection
        cards={commanders}
        title="Top Comandantes"
        name={(cardData) => `${cardData.count} decks`}
      />
    )}
    <CardsSection
      cards={top}
      title="Cartas mais usadas"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'Creature', []).slice(0, 25)}
      title="Criaturas em destaque"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'Sorcery', []).slice(0, 20)}
      title="Feitiços em destaque"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'Instant', []).slice(0, 20)}
      title="Instantâneas em destaque"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'Artifact', []).slice(0, 20)}
      title="Artefatos em destaque"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'Planeswalker', []).slice(0, 20)}
      title="Planeswalkers em destaque"
      name={nameFormatter}
    />
  </S.CardWrapper>
);

Commander.propTypes = CardDetailsType;

export default Commander;
