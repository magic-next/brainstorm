import React from 'react';
import { get } from 'lodash';

import CardStatsMenu from '../CardStatsMenu';
import CardSymbols from '../../CardSymbols';
import TypeGraph from '../CardStatsGraph';
import * as S from './styled';

import CardDetailsType from '../../../types/CardDetails';
import { getImage } from '../../../services/image';

const Summary = ({
  card,
  decks,
  distribuition,
  isCommander,
  viewAs,
}) => {
  const image = getImage(card.name, 'large');
  const url = get(card, 'images.large', image);
  const name = card.portugueseName || card.name;
  const text = card.text.split('\n');

  return (
    <S.SummaryWrapper>
      <S.ImageWrapper>
        <img
          src={url}
          alt={`Card "${name}"`}
          title={name}
        />
        {isCommander && (
          <div className="view-as-menu">
            <CardStatsMenu
              option={viewAs}
              cardId={card.id}
            />
          </div>
        )}
        <p>
          <strong className="text--bold">{decks}</strong>
          &nbsp;decks cadastrados
        </p>
      </S.ImageWrapper>
      <S.TextWrapper>
        <h1 className="title">{name}</h1>
        <h4>
          <CardSymbols text={card.manaCost} />
        </h4>
        <small>{card.type}</small>
        {text.map((paragraph, index) => (
          <p key={index.toString()}>
            <S.SymbolWrapper text={paragraph} />
          </p>
        ))}
        {!card.flavor ? null : (
          <S.FlavorWrapper>{card.flavor}</S.FlavorWrapper>
        )}
        {!/creature|criatura/i.test(card.type) ? null : (
          <p>
            <S.BottomWrapper>{`${card.power}/${card.toughness}`}</S.BottomWrapper>
          </p>
        )}
        {!card.loyalty ? null : (
          <p>
            <S.BottomWrapper>{`[${card.loyalty}]`}</S.BottomWrapper>
          </p>
        )}
      </S.TextWrapper>
      <TypeGraph data={distribuition} />
    </S.SummaryWrapper>
  );
};

Summary.propTypes = CardDetailsType;

export default Summary;
