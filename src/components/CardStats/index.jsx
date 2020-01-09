/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import Summary from './CardStatsSummary';
import CardStatsMenu from './CardStatsMenu';
import CardStatsSections from './CardStatsSections';

import * as S from './styled';
import CardDetailsType from '../../types/CardDetails';

const ViewMode = ({ viewAs, ...props }) => {
  if (viewAs === 'stats') {
    return (
      <CardStatsSections {...props} />
    );
  }
  return null;
};

ViewMode.propTypes = {
  viewAs: PropTypes.string.isRequired,
};

const Commander = ({
  card,
  decks,
  distribuition,
  top,
  commanders,
  topTypes,
  viewAs,
}) => (
  <S.CardWrapper>
    <Summary
      card={card}
      decks={decks}
      distribuition={distribuition}
    />
    <CardStatsMenu option={viewAs} />
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
