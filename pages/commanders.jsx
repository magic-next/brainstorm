import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Panel from '../components/Panel';
import RankingNav from '../components/RankingNav';
import RankingType from '../types/Ranking';

import { list } from '../services/ranking';

const Main = ({ ranking = [], filter }) => (
  <Layout
    title="Ranking de Comandantes"
    darkNavigator
    path={[
      { name: 'Início', icon: 'home', url: '/' },
      { name: 'Ranking', icon: 'ranking', url: '/ranking' },
    ]}
  >
    <RankingNav filter={filter} />
    <Container>
      <Panel ranking={ranking} />
    </Container>
  </Layout>
);

Main.propTypes = {
  ranking: PropTypes.arrayOf(RankingType).isRequired,
  filter: PropTypes.string,
};

Main.defaultProps = {
  filter: '',
};

Main.getInitialProps = async ({ query }) => {
  const filter = query.filter || '';
  const ranking = await list(filter);
  return { ranking, filter };
};

export default Main;
