import React from 'react';
import 'isomorphic-fetch';

import Layout from '../components/Layout';
import Container from '../components/Container';
import CardStats from '../components/CardStats';

import { getById } from '../services/cards';
import { commander } from '../services/ranking';
import CardDetailsType from '../types/CardDetails';

import { types } from '../utils';

const CardPage = ({
  card,
  decks,
  distribuition,
  top,
  commanders,
}) => (
  <Layout title={`${card.name}`}>
    <Container>
      <CardStats
        distribuition={distribuition}
        card={card}
        decks={decks}
        top={top}
        commanders={commanders}
      />
    </Container>
  </Layout>
);

CardPage.propTypes = CardDetailsType;

CardPage.getInitialProps = async ({ query }) => {
  const card = await getById(query.cardId);
  const skills = card.leadershipSkills[0] || {};
  const isCommander = !!skills.commander;
  const { distribuition, ...infos } = await commander({
    isCommander,
    cardId: query.cardId,
  });
  const formatedData = distribuition.map((item) => ({
    id: item.type,
    label: types[item.type] || item.type,
    value: item.count,
  }));
  return {
    ...infos,
    card,
    isCommander,
    distribuition: formatedData,
  };
};

export default CardPage;
