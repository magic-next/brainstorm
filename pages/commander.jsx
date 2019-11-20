import React from 'react';
import 'isomorphic-fetch';
// import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import { commander } from '../services/ranking';
// import Container from '../components/Container';
// import Panel from '../components/Panel';
// import RankingNav from '../components/RankingNav';
import CardType from '../types/Card';

const Commander = ({ card }) => (
  <Layout
    darkNavigator
    path={[
      { name: 'Início', icon: 'home', url: '/' },
      { name: 'Ranking', icon: 'ranking', url: '/ranking' },
      { name: card.name, icon: 'card', url: '/commander/blablabla' },
    ]}
  >
    <div>Commander</div>
  </Layout>
);

Commander.propTypes = {
  card: CardType.isRequired,
};

Commander.getInitialProps = async ({ query }) => {
  const infos = await commander(query.cardId);
  return infos;
};

export default Commander;
