import React from 'react';
import PropTypes from 'prop-types';
import 'isomorphic-fetch';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import CardStats from '@/components/CardStats';

import CardsService from '@/services/cards';
import { commander } from '@/services/ranking';
import CardDetailsType from '@/types/CardDetails';
import ApiContext from '@/contexts/Api';

const CardPage = ({
  card,
  decks,
  distribuition,
  top,
  commanders,
  mode,
  isCommander,
  apiUrl,
  tutorUrl,
  ...topTypes
}) => (
  <ApiContext.Provider value={{ apiUrl, tutorUrl }}>
    <Layout title={`${card.portugueseName || card.name}`}>
      <Container>
        <CardStats
          distribuition={distribuition}
          card={card}
          decks={decks}
          top={top}
          topTypes={topTypes}
          viewAs={mode}
          isCommander={isCommander}
          commanders={commanders}
        />
      </Container>
    </Layout>
  </ApiContext.Provider>
);

CardPage.propTypes = {
  ...CardDetailsType,
  apiUrl: PropTypes.string.isRequired,
  tutorUrl: PropTypes.string.isRequired,
};

const getMode = ({ isCommander, disableCommander }) => {
  if (!isCommander || disableCommander) {
    return 'card';
  }
  return 'stats';
};

const getSkills = (card) => {
  if (!card.leadership_skills) {
    return {};
  }
  if (Array.isArray(card.leadership_skills)) {
    return card.leadership_skills[0] || {};
  }
  return card.leadership_skills;
};

CardPage.getInitialProps = async ({ query }) => {
  const disableCommander = query.commander === '0' || query.commander === 'false';
  const apiUrl = process.env.API_URL;
  const tutorUrl = process.env.TUTOR_URL;
  const service = CardsService({ apiUrl });
  const card = await service.getBySlug(query.slug);
  const canBeCommander = card.leadership_skills && card.leadership_skills.commander;
  const asCommander = !disableCommander && !!canBeCommander;

  const { decks, distribuition } = await service.getStats({ cardId: card.id, asCommander });

  const skills = getSkills(card);
  const isCommander = !!skills.commander;

  const infos = await commander({
    isCommander,
    cardId: card.id,
    card,
    decks: decks.total,
  });

  return {
    ...infos,
    card,
    decks,
    isCommander,
    distribuition,
    apiUrl,
    tutorUrl,
    mode: getMode({ isCommander, disableCommander }),
  };
};

export default CardPage;
