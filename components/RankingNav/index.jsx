import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { format, subMonths, subYears } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { TrendingUp } from 'styled-icons/feather/TrendingUp';
import { ChevronLeft } from 'styled-icons/fa-solid/ChevronLeft';
import { ChevronRight } from 'styled-icons/fa-solid/ChevronRight';

import Container from '../Container';
import Select from '../Select';
import Button from '../Button';
import * as S from './styled';

const createOptions = () => {
  const config = { locale: ptBR };
  const date = new Date();

  const month = format(subMonths(date, 1), 'MMMM', config);
  const monthUpper = `${month.charAt(0).toUpperCase()}${month.slice(1)}`;
  const year = format(date, 'yyyy', config);
  const prevYear = format(subYears(date, 1), 'yyyy', config);
  const baseUrl = '/commanders';

  return {
    all: { url: `${baseUrl}`, label: 'Qualquer' },
    week: { url: `${baseUrl}/week`, label: 'Última semana' },
    month: { url: `${baseUrl}/month`, label: monthUpper },
    year: { url: `${baseUrl}/year`, label: year },
    years: { url: `${baseUrl}/years`, label: `${year} e ${prevYear}` },
  };
};

const PageButton = ({ page, children }) => {
  if (!page) {
    return (
      <>
        {children}
      </>
    );
  }
  return (
    <a href={`?page=${page}`}>
      {children}
    </a>
  );
};

PageButton.propTypes = {
  page: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

const NavItems = ({ filter, page }) => {
  const opt = createOptions();
  const options = Object.entries(opt).map(([value, item]) => ({
    value,
    label: item.label,
  }));

  const onChange = (ev) => {
    const value = opt[ev.target.value];
    if (value) {
      Router.push('/error', value.url);
    }
  };

  return (
    <S.NavWrapper>
      <Container className="flex">
        <div className="flex flex-1">
          <TrendingUp className="trending" title="Filtrar ranking" />
          <h1>Comandantes em alta </h1>
          <label htmlFor="filter">
            <span>no período</span>
            <Select
              id="filter"
              name="filter"
              value={filter}
              options={options}
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <PageButton page={page > 1 ? page - 1 : null}>
            <Button primary disabled={page === 1}>
              <ChevronLeft className="left" />
              Anterior
            </Button>
          </PageButton>
          <PageButton page={page + 1}>
            <Button primary>
              Próximo
              <ChevronRight className="right" />
            </Button>
          </PageButton>
        </div>
      </Container>
    </S.NavWrapper>
  );
};

NavItems.propTypes = {
  filter: PropTypes.string,
  page: PropTypes.number.isRequired,
};

NavItems.defaultProps = {
  filter: 'all',
};

export default NavItems;
