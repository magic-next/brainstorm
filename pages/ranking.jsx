import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Panel from '../components/Panel';
import RankingNav from '../components/RankingNav';
import RankingType from '../types/Ranking';
import mock from '../mock/ranking.json';

const Main = ({ ranking = [], filter }) => (
  <Layout
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
  // const { TUTOR_URL } = process.env;
  const filter = query.filter || '';
  // const ranking = await fetch(`${TUTOR_URL}/ranking?filter=${filter}`)
  //   .then((res) => res.json());
  return { ranking: mock, filter };
};

export default Main;
