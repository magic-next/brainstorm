import React from 'react';
import CardsService from '@/services/cards';
import { average } from '@/services/ranking';

import Page from './index';

const AveragePage = (props) => (
  <Page {...props} />
);

AveragePage.getInitialProps = async ({ query }) => {
  const disableCommander = query.commander === '0' || query.commander === 'false';
  const apiUrl = process.env.API_URL;
  const tutorUrl = process.env.TUTOR_URL;
  const service = CardsService({ apiUrl });

  const {
    card,
    decks,
    distribuition,
  } = await service.getStats({ cardId: query.cardId, asCommander: !disableCommander });

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
    apiUrl,
    tutorUrl,
    mode: 'average',
  };
};

export default AveragePage;
