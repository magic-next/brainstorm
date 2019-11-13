import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Panel from '../components/Panel';
import RankingNav from '../components/RankingNav';
import RankingType from '../types/Ranking';

const Main = ({ ranking = [] }) => (
  <Layout
    darkNavigator
    path={[
      { name: 'Início', icon: 'home' },
      { name: 'Ranking', icon: 'ranking' },
    ]}
  >
    <RankingNav />
    <Container>
      <Panel ranking={ranking} />
    </Container>
  </Layout>
);

Main.propTypes = {
  ranking: PropTypes.arrayOf(RankingType).isRequired,
};

Main.getInitialProps = async () => {
  const { TUTOR_URL } = process.env;
  const ranking = await fetch(`${TUTOR_URL}/ranking`)
    .then((res) => res.json());
  return { ranking };
};

export default Main;
