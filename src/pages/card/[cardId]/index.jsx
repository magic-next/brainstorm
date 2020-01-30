import React from 'react';
import 'isomorphic-fetch';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import CardStats from '@/components/CardStats';

import { getStats } from '@/services/cards';
import { commander } from '@/services/ranking';
import CardDetailsType from '@/types/CardDetails';

const CardPage = ({
  card,
  decks,
  distribuition,
  top,
  commanders,
  mode,
  isCommander,
  ...topTypes
}) => (
  <Layout title={`${card.name}`}>
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
);

CardPage.propTypes = CardDetailsType;

const getMode = ({ isCommander, disableCommander }) => {
  if (!isCommander || disableCommander) {
    return 'card';
  }
  return 'stats';
};

CardPage.getInitialProps = async ({ query }) => {
  const disableCommander = query.commander === '0' || query.commander === 'false';

  const {
    card,
    decks,
    distribuition,
  } = await getStats({ cardId: query.cardId, asCommander: !disableCommander });

  const skills = (card.leadershipSkills || [])[0] || {};

  const isCommander = !!skills.commander;

  const infos = await commander({
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
    mode: getMode({ isCommander, disableCommander }),
  };
};

export default CardPage;
