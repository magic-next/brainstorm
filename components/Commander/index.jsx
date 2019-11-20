import React from 'react';

import Summary from './Summary';

import * as S from './styled';
import CommanderType from '../../types/Commander';

const Commander = ({ card, decks, distribuition }) => (
  <S.CommanderWrapper>
    <Summary
      card={card}
      decks={decks}
      distribuition={distribuition}
    />
  </S.CommanderWrapper>
);

Commander.propTypes = CommanderType;

export default Commander;
