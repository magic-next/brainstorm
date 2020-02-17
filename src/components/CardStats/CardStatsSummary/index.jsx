import React from 'react';

import Card from '../../Card';
import CardStatsMenu from '../CardStatsMenu';
import CardSymbols from '../../CardSymbols';
import TypeGraph from '../CardStatsGraph';
import ExternalLinks from './CardStatsSummaryExternal';
import * as V from '@/styles';
import * as S from './styled';

import CardDetailsType from '../../../types/CardDetails';

const Summary = ({
  card,
  decks,
  distribuition,
  isCommander,
  viewAs,
}) => {
  const name = card.portugueseName || card.name;
  const text = (card.text || '').split('\n');

  return (
    <S.SummaryWrapper>
      <S.ImageWrapper>
        <Card card={card} version="large" />
        {isCommander && (
          <div className="view-as-menu">
            <CardStatsMenu
              option={viewAs}
              slug={card.slug}
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
          <CardSymbols shadow text={card.manaCost || ''} />
        </h4>
        <small>{card.type}</small>
        {text.map((paragraph, index) => (
          <p key={index.toString()}>
            <S.SymbolWrapper size="small" text={paragraph} />
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
        <div>
          <ExternalLinks name={card.name} color={V.colors.external.ligamagic}>
            <>
              <img src="/icons/liga.png" alt="Ícone do Logo da Ligamagic" />
              <div className="flex flex-1">
                Comprar na LigaMagic
              </div>
            </>
          </ExternalLinks>
          <ExternalLinks
            name={card.name}
            provider="burnmana"
            visibleWithouPrice={false}
          >
            <>
              <img src="/icons/burnmana.png" alt="Ícone do Logo da BurnMana" />
              <div className="flex flex-1">
                Comprar na BurnMana
              </div>
            </>
          </ExternalLinks>
        </div>
      </S.TextWrapper>
      <TypeGraph data={distribuition} />
    </S.SummaryWrapper>
  );
};

Summary.propTypes = CardDetailsType;

export default Summary;
