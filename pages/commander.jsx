import React from 'react';
import 'isomorphic-fetch';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Commander from '../components/Commander';

import { commander } from '../services/ranking';
import CommanderType from '../types/Commander';

import { types } from '../utils';

const CommanderPage = ({
  card,
  decks,
  distribuition,
  top,
}) => (
  <Layout
    darkNavigator
    path={[
      { name: 'Início', icon: 'home', url: '/' },
      { name: 'Ranking', icon: 'ranking', url: '/ranking' },
      { name: card.name, icon: 'card', url: `/commander/${card.id}` },
    ]}
  >
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
  const { distribuition, ...infos } = await commander(query.cardId);
  const formatedData = distribuition.map((item) => ({
    id: item.type,
    label: types[item.type] || item.type,
    value: item.count,
  }));
  return { ...infos, distribuition: formatedData };
};

export default CommanderPage;
