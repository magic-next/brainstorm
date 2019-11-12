import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Panel from '../components/Panel';
import RankingType from '../types/Ranking';

const Main = ({ ranking = [] }) => (
  <div style={{ width: '65%', margin: 'auto' }}>
    <Panel ranking={ranking} />
  </div>
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
