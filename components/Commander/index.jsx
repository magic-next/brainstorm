import React from 'react';

import Summary from './Summary';

import * as S from './styled';
import CommanderType from '../../types/Commander';

const Commander = ({ card, decks }) => (
  <S.CommanderWrapper>
    <Summary card={card} decks={decks} />
  </S.CommanderWrapper>
);

Commander.propTypes = CommanderType;

export default Commander;
