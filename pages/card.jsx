import React from 'react';
import 'isomorphic-fetch';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Commander from '../components/Commander';

import { getById } from '../services/cards';
import { commander } from '../services/ranking';
import CommanderType from '../types/Commander';

import { types } from '../utils';

const CommanderPage = ({
  card,
  decks,
  distribuition,
  top,
}) => (
  <Layout title={`${card.name}`}>
    <Container>
      <Commander
        distribuition={distribuition}
        card={card}
        decks={decks}
        top={top}
      />
    </Container>
  </Layout>
);

CommanderPage.propTypes = CommanderType;

CommanderPage.getInitialProps = async ({ query }) => {
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
  return { ...infos, distribuition: formatedData };
};

export default CommanderPage;
