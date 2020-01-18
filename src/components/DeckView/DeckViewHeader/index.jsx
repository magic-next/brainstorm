import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button';
import DeckViewCopy from '../DeckViewCopy';

import * as S from './styled';

const DeckViewHeader = ({ deckEntries }) => (
  <S.HeaderWrapper>
    <h1 className="flex-1">Header</h1>
    <DeckViewCopy deckEntries={deckEntries}>Exportar</DeckViewCopy>
    <Button primary small>Copiar Deck</Button>
  </S.HeaderWrapper>
);

DeckViewHeader.propTypes = {
  deckEntries: PropTypes.arrayOf(PropTypes.arrayOf()),
};

DeckViewHeader.defaultProps = {
  deckEntries: [],
};

export default DeckViewHeader;
