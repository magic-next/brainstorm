import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Panel from '@/components/Panel';
import RankingNav from '@/components/RankingNav';
import RankingType from '@/types/Ranking';

import { list } from '@/services/ranking';

const Main = ({ ranking = [], filter, page }) => (
  <Layout title="Ranking de Comandantes">
    <RankingNav filter={filter} page={page} />
    <Container>
      <Panel ranking={ranking} />
    </Container>
    {ranking.length < 12 ? null : (
      <RankingNav position="bottom" filter={filter} page={page} />
    )}
  </Layout>
);

Main.propTypes = {
  ranking: PropTypes.arrayOf(RankingType).isRequired,
  filter: PropTypes.string,
  page: PropTypes.number,
};

Main.defaultProps = {
  filter: '',
  page: 1,
};

Main.getInitialProps = async ({ query }) => {
  const filter = query.filter || '';
  const page = Number(query.page) || 1;
  const ranking = await list(filter, page);
  return { ranking, filter, page };
};

export default Main;
