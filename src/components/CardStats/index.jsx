/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import Summary from './CardStatsSummary';
import CardStatsMenu from './CardStatsMenu';
import CardStatsSections from './CardStatsSections';
import DeckView from '../DeckView';

import * as S from './styled';
import CardDetailsType from '../../types/CardDetails';
import DeckType from '../../types/Deck';

const ViewMode = ({ viewAs, ...props }) => {
  if (viewAs === 'stats' || viewAs === 'card') {
    return (
      <CardStatsSections {...props} />
    );
  }
  const { topTypes: { cards }, ...rest } = props;
  console.log('INFERNO', cards);
  return (
    <DeckView cards={cards} {...rest} />
  );
};

ViewMode.propTypes = {
  viewAs: PropTypes.string.isRequired,
  topTypes: DeckType,
};

ViewMode.defaultProps = {
  topTypes: null,
};

const Commander = ({
  card,
  decks,
  distribuition,
  top,
  commanders,
  topTypes,
  viewAs,
  isCommander,
}) => (
  <S.CardWrapper>
    <Summary
      card={card}
      decks={decks}
      distribuition={distribuition}
    />
    {isCommander && (
      <CardStatsMenu
        option={viewAs}
        cardId={card.id}
      />
    )}
    <ViewMode
      top={top}
      commanders={commanders}
      topTypes={topTypes}
      viewAs={viewAs}
    />
  </S.CardWrapper>
);

Commander.propTypes = {
  ...CardDetailsType,
  viewAs: PropTypes.string,
};

Commander.defaultProps = {
  viewAs: 'stats',
};

export default Commander;
