import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Panel from '../components/Panel';
import RankingType from '../types/Ranking';

const Main = ({ ranking = [] }) => (
  <Layout>
    <div>
      <Panel ranking={ranking} />
    </div>
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
