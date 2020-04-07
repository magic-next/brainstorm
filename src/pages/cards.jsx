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
  total,
  apiUrl,
  page,
}) => {
  const end = (page * max) > total;
  const start = ((page - 1) * max) + 1;
  const last = Math.min(page * max, total);
  const title = `${start} - ${last} de ${total}`;
  const subtitle = `Resultados para "${q}"`;
  return (
    <ApiContext.Provider value={{ apiUrl }}>
      <Layout title={`Buscar por "${q}"`}>
        <ResultNav
          end={end}
          page={page}
          params={{ q }}
        >
          <>
            <strong className="text--bold">{title}</strong>
            <span>
              &nbsp;
              {subtitle}
            </span>
          </>
        </ResultNav>
        <Container>
          <Panel ranking={cards} />
        </Container>
        {cards.length < 12 ? null : (
          <ResultNav
            end={end}
            position="bottom"
            page={page}
            params={{ q }}
          >
            <>
              <strong className="text--bold">{title}</strong>
              <span>
                &nbsp;
                {subtitle}
              </span>
            </>
          </ResultNav>
        )}
      </Layout>
    </ApiContext.Provider>
  );
};

Main.propTypes = {
  cards: PropTypes.arrayOf(CardType).isRequired,
  apiUrl: PropTypes.string.isRequired,
  q: PropTypes.string,
  total: PropTypes.number,
  page: PropTypes.number,
};

Main.defaultProps = {
  q: '',
  total: 0,
  page: 1,
};

Main.getInitialProps = async ({ query }) => {
  const apiUrl = process.env.API_URL;
  const service = CardsService({ apiUrl });
  const q = query.q || '';
  const page = Number(query.page) || 1;
  const promise = q.length < 3
    ? Promise.resolve([])
    : service.search({
      maxResults: 20,
      page,
      q,
      expand: false,
    }, null);
  const response = await promise;
  const cards = response.results.map((card) => ({ card }));
  return {
    cards,
    page,
    apiUrl,
    total: response.total,
    q,
  };
};

export default Main;
