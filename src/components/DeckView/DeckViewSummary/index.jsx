import React from 'react';
import PropTypes from 'prop-types';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Button from '../../Button';

import * as S from './styled';
import DeckType from '@/types/Deck';
import CardType from '@/types/Card';

const CMCItem = ({ cost, count }) => (
  <li className="cmc" title={`${count} cards com CMC ${cost}`}>
    <small>CMC</small>
    <strong className="text--bold cmc__cost">
      {`${cost}`}
    </strong>
    <S.BarWrapper count={count} />
  </li>
);

CMCItem.propTypes = {
  cost: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

const calculateCMC = (cards) => {
  const cmc = Array.from({ length: 8 })
    .reduce((p, _, index) => ({ ...p, [index]: 0 }), {});
  cards.forEach((card) => {
    if (card.types.includes('Land')) {
      return;
    }
    if (card.convertedManaCost > 6) {
      cmc['7'] += 1;
      return;
    }
    cmc[card.convertedManaCost] += 1;
  });
  return cmc;
};

const DeckViewSummary = ({ deck, className, cards }) => {
  const cmc = calculateCMC(cards);

  return (
    <S.SummaryWrapper className={className}>
      <div className="back-area">
        <a href="/me">
          <Button small primary block>
            Meus Decks
          </Button>
        </a>
      </div>
      <h1>{deck.name}</h1>
      <h2>
        Deck
        <strong className="text--bold format">{deck.format}</strong>
        <br />
        Atualizado
        <strong className="text--bold">{formatRelative(new Date(deck.updatedAt), new Date(), { locale: ptBR })}</strong>
      </h2>
      <S.CurveWrapper>
        <h2 className="text--bold">Curva</h2>
        <ul>
          {Object.values(cmc).map((count, index, array) => (
            <CMCItem
              key={index.toString()}
              cost={index === array.length - 1 ? `${index}+` : index.toString()}
              count={count}
            />
          ))}
        </ul>
      </S.CurveWrapper>
    </S.SummaryWrapper>
  );
};

DeckViewSummary.propTypes = {
  deck: DeckType.isRequired,
  className: PropTypes.string,
  cards: PropTypes.arrayOf(CardType),
};

DeckViewSummary.defaultProps = {
  className: null,
  cards: [],
};

export default DeckViewSummary;
