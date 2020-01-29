import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { PencilAlt as Edit } from 'styled-icons/fa-solid/PencilAlt';
import { TrashAlt as Trash } from 'styled-icons/fa-regular/TrashAlt';

import Button from '@/components/Button';

import DeckType from '@/types/Deck';
import UserType from '@/types/User';
import * as S from './styled';

const ColumnLink = ({ deckId, children }) => (
  <Link href={`/decks/${deckId}`}>
    <a>
      {children}
    </a>
  </Link>
);

ColumnLink.propTypes = {
  deckId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const DeckListItem = ({ deck, user }) => {
  const myDeck = user && user.id === deck.ownerId;
  return (
    <S.ItemWrapper>
      <S.ItemColumnWrapper>
        <ColumnLink deckId={deck.id}>
          {deck.name}
        </ColumnLink>
      </S.ItemColumnWrapper>
      <S.ItemColumnWrapper>
        <ColumnLink deckId={deck.id}>
          {format(new Date(deck.updatedAt), 'dd/MM/Y hh:mm:ss')}
        </ColumnLink>
      </S.ItemColumnWrapper>
      {myDeck && (
        <S.ItemColumnWrapper right>
          <div className="flex flex--center">
            <Button primary small>
              <Edit />
              Editar
            </Button>
            <Button primary small>
              <Trash />
              Excluir
            </Button>
          </div>
        </S.ItemColumnWrapper>
      )}
    </S.ItemWrapper>
  );
};

DeckListItem.propTypes = {
  deck: DeckType.isRequired,
  user: UserType,
};

DeckListItem.defaultProps = {
  user: null,
};

export default DeckListItem;
