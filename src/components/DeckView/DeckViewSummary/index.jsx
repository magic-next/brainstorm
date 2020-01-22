import React from 'react';
import PropTypes from 'prop-types';

import DeckType from '@/types/Deck';

const DeckViewSummary = ({ deck, className }) => (
  <div className={className}>
    <h1>Sumário</h1>
    <pre>
      {JSON.stringify(deck, null, 2)}
    </pre>
  </div>
);

DeckViewSummary.propTypes = {
  deck: DeckType.isRequired,
  className: PropTypes.string,
};

DeckViewSummary.defaultProps = {
  className: null,
};

export default DeckViewSummary;
