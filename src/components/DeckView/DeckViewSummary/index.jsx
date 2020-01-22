import React from 'react';
import PropTypes from 'prop-types';
import { formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import Button from '../../Button';

import * as S from './styled';
import DeckType from '@/types/Deck';

const DeckViewSummary = ({ deck, className }) => (
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
  </S.SummaryWrapper>
);

DeckViewSummary.propTypes = {
  deck: DeckType.isRequired,
  className: PropTypes.string,
};

DeckViewSummary.defaultProps = {
  className: null,
};

export default DeckViewSummary;
