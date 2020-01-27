import React from 'react';
import { getStats } from '@/services/cards';
import { average } from '@/services/ranking';

import Page from './index';

const AveragePage = (props) => (
  <Page {...props} />
);

AveragePage.getInitialProps = async ({ query }) => {
  const disableCommander = query.commander === '0' || query.commander === 'false';

  const {
    card,
    decks,
    distribuition,
  } = await getStats({ cardId: query.cardId, asCommander: !disableCommander });

  const skills = card.leadershipSkills[0] || {};

  const isCommander = !!skills.commander;

  const infos = await average({
    isCommander: isCommander && !disableCommander,
    cardId: query.cardId,
    maxResults: 15,
    card,
  });

  return {
    ...infos,
    card,
    decks,
    isCommander,
    distribuition,
    mode: 'average',
  };
};

export default AveragePage;
