import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Panel from '@/components/Panel';
import RankingNav from '@/components/Ranking/RankingNav';
import RankingNavFilter from '@/components/Ranking/RankingNav/RankingNavFilter';
import RankingType from '@/types/Ranking';
import { colorsCombinations } from '@/utils';

import { list } from '@/services/ranking';

const max = 20;

const Main = ({
  ranking = [],
  filter,
  page,
  colors,
}) => (
  <Layout title="Ranking de Comandantes">
    <RankingNav end={ranking.length < max} colors={colors} filter={filter} page={page} />
    <Container>
      <RankingNavFilter
        show
        colors={colors}
      />
      <Panel ranking={ranking} />
    </Container>
    {ranking.length < 12 ? null : (
      <RankingNav end={ranking.length < max} colors={colors} position="bottom" filter={filter} page={page} />
    )}
  </Layout>
);

Main.propTypes = {
  ranking: PropTypes.arrayOf(RankingType).isRequired,
  colors: PropTypes.string,
  filter: PropTypes.string,
  page: PropTypes.number,
};

Main.defaultProps = {
  filter: '',
  colors: null,
  page: 1,
};

Main.getInitialProps = async ({ query }) => {
  const canon = query.colors ? query.colors.split('').sort().join('') : null;
  const colors = colorsCombinations[canon] ? canon : null;
  const filter = query.filter || '';
  const page = Number(query.page) || 1;
  const ranking = await list({ filter, page, colors });
  return {
    ranking,
    filter,
    page,
    colors,
  };
};

export default Main;
