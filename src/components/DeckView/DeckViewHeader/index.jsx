import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Button from '@/components/Button';
import DeckViewCopy from '../DeckViewCopy';

import * as S from './styled';

const DeckViewHeader = ({ deckEntries }) => {
  const onCopy = () => toast.info('Copiado para a área de transferência');
  return (
    <S.HeaderWrapper>
      <div className="flex-1" />
      <DeckViewCopy onCopy={onCopy} deckEntries={deckEntries}>Exportar</DeckViewCopy>
      <Button primary small flat>Copiar Deck</Button>
    </S.HeaderWrapper>
  );
};

DeckViewHeader.propTypes = {
  deckEntries: PropTypes.arrayOf(PropTypes.array),
};

DeckViewHeader.defaultProps = {
  deckEntries: [],
};

export default DeckViewHeader;
