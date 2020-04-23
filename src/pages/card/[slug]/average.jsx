import React from 'react';
import CardsService from '@/services/cards';
import { topList, average } from '@/services/ranking';

import Page from './index';

const AveragePage = (props) => (
  <Page {...props} />
);

const getSkills = (card) => {
  if (!card.leadership_skills) {
    return {};
  }
  if (Array.isArray(card.leadership_skills)) {
    return card.leadership_skills[0] || {};
  }
  return card.leadership_skills;
};

AveragePage.getInitialProps = async ({ query }) => {
  const disableCommander = query.commander === '0' || query.commander === 'false';
  const apiUrl = process.env.API_URL;
  const tutorUrl = process.env.TUTOR_URL;
  const service = CardsService({ apiUrl });
  const card = await service.getBySlug(query.slug);

  const skills = getSkills(card);
  const canBeCommander = !!skills.commander;
  const asCommander = !disableCommander && !!canBeCommander;

  const [stats, infos, commanders] = await Promise.all([
    service.getStats({ cardId: card.id, asCommander }),
    topList({ asCommander, cardId: card.id }),
  ]);
  const { decks, distribuition } = stats;


  return {
    ...infos,
    card,
    decks,
    isCommander: canBeCommander,
    distribuition,
    apiUrl,
    tutorUrl,
    mode: 'average',
  };
};

export default AveragePage;
