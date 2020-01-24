import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Copy } from 'styled-icons/boxicons-solid/Copy';
import { FileBlank } from 'styled-icons/boxicons-solid/FileBlank';
import { Edit } from 'styled-icons/material/Edit';

import Button from '@/components/Button';
import DeckViewCopy from '../DeckViewCopy';

import * as S from './styled';
import UserType from '@/types/User';
import DeckType from '@/types/Deck';

const DeckViewHeader = ({ deckEntries, user, deck }) => {
  const onCopy = () => toast.info('Copiado para a área de transferência');
  const myDeck = deck && deck.ownerId && user && deck.ownerId === user.id;
  return (
    <S.HeaderWrapper>
      <div className="flex-1" />
      <DeckViewCopy onCopy={onCopy} deckEntries={deckEntries}>
        <FileBlank />
        Exportar
      </DeckViewCopy>
      <Button primary small flat>
        {myDeck ? (
          <>
            <Edit />
            Editar Deck
          </>
        ) : (
          <>
            <Copy />
            Copiar Deck
          </>
        )}
      </Button>
    </S.HeaderWrapper>
  );
};

DeckViewHeader.propTypes = {
  deckEntries: PropTypes.arrayOf(PropTypes.array),
  deck: DeckType,
  user: UserType,
};

DeckViewHeader.defaultProps = {
  deckEntries: [],
  deck: null,
  user: null,
};

export default DeckViewHeader;
