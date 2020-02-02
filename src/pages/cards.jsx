import React from 'react';
import 'isomorphic-fetch';
import PropTypes from 'prop-types';

import Layout from '@/components/Layout';
import Container from '@/components/Container';
import Panel from '@/components/Panel';
import ResultNav from '@/components/ResultNav';

import CardType from '@/types/Card';
import CardsService from '@/services/cards';
import ApiContext from '../contexts/Api';

const max = 20;

const Main = ({
  cards = [],
  q,
  apiUrl,
  page,
}) => (
  <ApiContext.Provider value={{ apiUrl }}>
    <Layout title={`Buscar por "${q}"`}>
      <ResultNav
        end={cards.length < max}
        page={page}
        params={{ q }}
      >
        <h1>{`Resultados para "${q}"`}</h1>
      </ResultNav>
      <Container>
        <Panel ranking={cards} />
      </Container>
      {cards.length < 12 ? null : (
        <ResultNav
          end={cards.length < max}
          position="bottom"
          page={page}
          params={{ q }}
        >
          <h1>{`Resultados para "${q}"`}</h1>
        </ResultNav>
      )}
    </Layout>
  </ApiContext.Provider>
);

Main.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
  apiUrl: PropTypes.string.isRequired,
  q: PropTypes.string,
  page: PropTypes.number,
};

Main.defaultProps = {
  q: '',
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
    cards: cardsItems,
    page,
    apiUrl,
    q,
  };
};

export default Main;
