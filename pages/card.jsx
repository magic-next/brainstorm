import React from 'react';
import 'isomorphic-fetch';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import CardStats from '@/components/CardStats';

import { getStats } from '@/services/cards';
import { commander, average } from '@/services/ranking';
import CardDetailsType from '@/types/CardDetails';

import { types } from '@/utils';

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

const getMode = ({ isCommander, averageMode, disableCommander }) => {
  if (!isCommander || disableCommander) {
    return 'card';
  }
  if (averageMode) {
    return 'average';
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

  const skills = card.leadershipSkills[0] || {};

  const isCommander = !!skills.commander;
  const averageMode = isCommander && !!query.average;

  const service = averageMode ? average : commander;

  const infos = await service({
    isCommander: isCommander && !disableCommander,
    cardId: query.cardId,
    maxResults: 15,
  });
  const formatedData = distribuition.map((item) => ({
    id: item.type,
    label: types[item.type] || item.type,
    value: item.count,
  }));

  return {
    ...infos,
    card,
    decks,
    isCommander,
    mode: getMode({ isCommander, averageMode, disableCommander }),
    distribuition: formatedData,
  };
};

export default CardPage;
