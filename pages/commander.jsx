import React from 'react';
import 'isomorphic-fetch';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Commander from '../components/Commander';

import { commander } from '../services/ranking';
import CommanderType from '../types/Commander';

const CommanderPage = ({ card, decks }) => (
  <Layout
    darkNavigator
    path={[
      { name: 'Início', icon: 'home', url: '/' },
      { name: 'Ranking', icon: 'ranking', url: '/ranking' },
      { name: card.name, icon: 'card', url: '/commander/blablabla' },
    ]}
  >
    <Container>
      <Commander
        card={card}
        decks={decks}
      />
    </Container>
  </Layout>
);

CommanderPage.propTypes = CommanderType;

CommanderPage.getInitialProps = async ({ query }) => {
  const infos = await commander(query.cardId);
  return infos;
};

export default CommanderPage;
