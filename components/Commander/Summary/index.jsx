import React from 'react';

import CardSymbols from '../../CardSymbols';
import TypeGraph from '../TypeGraph';
import * as S from './styled';

import CommanderType from '../../../types/Commander';
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
        <h1>{card.name}</h1>
        <h4>
          <CardSymbols text={card.manaCost} />
        </h4>
        <small>{card.type}</small>
        {text.map((paragraph, index) => (
          <p key={index.toString()}>
            <CardSymbols text={paragraph} />
          </p>
        ))}
        <p>
          <S.BottomWrapper>{`${card.power}/${card.toughness}`}</S.BottomWrapper>
        </p>
        <span className="flex-1" />
      </S.TextWrapper>
      <TypeGraph data={distribuition} />
    </S.SummaryWrapper>
  );
};

Summary.propTypes = CommanderType;

export default Summary;
