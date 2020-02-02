import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Panel from '@/components/Panel';
import RankingNav from '@/components/Ranking/RankingNav';

import CardType from '@/types/Card';
import CardsService from '@/services/cards';
import ApiContext from '../contexts/Api';

const max = 20;

const Main = ({
  cards = [],
  filter,
  apiUrl,
  page,
}) => (
  <ApiContext.Provider value={{ apiUrl }}>
    <Layout title="Ranking de Comandantes">
      <RankingNav end={cards.length < max} filter={filter} page={page} />
      <Container>
        <Panel ranking={cards} />
      </Container>
      {cards.length < 12 ? null : (
        <RankingNav end={cards.length < max} position="bottom" filter={filter} page={page} />
      )}
    </Layout>
  </ApiContext.Provider>
);

Main.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
  apiUrl: PropTypes.string.isRequired,
  filter: PropTypes.string,
  page: PropTypes.number,
};

Main.defaultProps = {
  filter: '',
  page: 1,
};

Main.getInitialProps = async ({ query }) => {
  const apiUrl = process.env.API_URL;
  const service = CardsService({ apiUrl });
  const q = query.q || '';
  const page = Number(query.page) || 1;
  const promise = q.length < 3
    ? Promise.resolve([])
    : service.search({ maxResults: 20, page, q }, null);
  const cards = await promise;
  const cardsItems = cards.map((card) => ({ card }));
  return {
    filter: q,
    cards: cardsItems,
    page,
    apiUrl,
  };
};

export default Main;
