import React from 'react';
import { get } from 'lodash';

import * as S from './styled';
import CardsSection from '../CardsSection';

import CardDetailsType from '../../../types/CardDetails';

const perc = (card) => parseFloat(card.perc)
  .toFixed(2)
  .replace('.', ',');

const nameFormatter = (cardData) => `
  <strong>${cardData.portugueseName || cardData.name}</strong>
  Presente em <strong>${perc(cardData)}%</strong>
`;

const commanderNameFormatter = (cardData) => `
  <strong>${cardData.portugueseName || cardData.name}</strong>
  <strong>${cardData.count}</strong> decks
`;

const Sections = ({ commanders, top, topTypes }) => (
  <S.SectionsWrapper>
    {!commanders ? null : (
      <CardsSection
        cards={commanders}
        title="Top Comandantes"
        name={commanderNameFormatter}
      />
    )}
    <CardsSection
      cards={top}
      title="Cartas mais usadas"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'creature', []).slice(0, 25)}
      title="Criaturas em destaque"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'sorcery', []).slice(0, 20)}
      title="Feitiços em destaque"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'instant', []).slice(0, 20)}
      title="Instantâneas em destaque"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'artifact', []).slice(0, 20)}
      title="Artefatos em destaque"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'enchantment', []).slice(0, 20)}
      title="Encantamentos em destaque"
      name={nameFormatter}
    />
    <CardsSection
      cards={get(topTypes, 'planeswalker', []).slice(0, 20)}
      title="Planeswalkers em destaque"
      name={nameFormatter}
    />
  </S.SectionsWrapper>
);

Sections.propTypes = CardDetailsType;

export default Sections;
