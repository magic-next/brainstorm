import React from 'react';

import CardSymbols from '../../CardSymbols';
import TypeGraph from '../TypeGraph';
import * as S from './styled';

import CardDetailsType from '../../../types/CardDetails';
import { getImage } from '../../../services/image';

const Summary = ({ card, decks, distribuition }) => {
  const image = getImage(card.name);
  const text = card.text.split('\n');

  return (
    <S.SummaryWrapper>
      <S.ImageWrapper>
        <img
          src={image}
          alt={`Card "${card.name}"`}
          title={card.name}
        />
        <p>{`${decks} Decks`}</p>
      </S.ImageWrapper>
      <S.TextWrapper>
        <h1 className="title">{card.name}</h1>
        <h4>
          <CardSymbols text={card.manaCost} />
        </h4>
        <small>{card.type}</small>
        {text.map((paragraph, index) => (
          <p key={index.toString()}>
            <CardSymbols text={paragraph} />
          </p>
        ))}
        {!/creature/i.test(card.type) ? null : (
          <p>
            <S.BottomWrapper>{`${card.power}/${card.toughness}`}</S.BottomWrapper>
          </p>
        )}
        {!card.loyalty ? null : (
          <p>
            <S.BottomWrapper>{`[${card.loyalty}]`}</S.BottomWrapper>
          </p>
        )}
        <span className="flex-1" />
      </S.TextWrapper>
      <TypeGraph data={distribuition} />
    </S.SummaryWrapper>
  );
};

Summary.propTypes = CardDetailsType;

export default Summary;
