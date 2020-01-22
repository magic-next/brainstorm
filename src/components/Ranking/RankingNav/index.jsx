import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { format, subMonths, subYears } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { TrendingUp } from 'styled-icons/feather/TrendingUp';
import { ChevronLeft } from 'styled-icons/fa-solid/ChevronLeft';
import { ChevronRight } from 'styled-icons/fa-solid/ChevronRight';

import Container from '../../Container';
import Select from '../../Select';
import Button from '../../Button';
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
    all: { url: `${baseUrl}`, label: 'Todo' },
    week: { url: `${baseUrl}/week`, label: 'Última semana' },
    month: { url: `${baseUrl}/month`, label: monthUpper },
    year: { url: `${baseUrl}/year`, label: year },
    years: { url: `${baseUrl}/years`, label: `${year} e ${prevYear}` },
  };
};

const PageButton = ({ page, children, colors }) => {
  const params = { page };
  if (colors) {
    params.colors = colors;
  }
  if (!page) {
    return (
      <>
        {children}
      </>
    );
  }
  const qs = Object
    .entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join('&');
  return (
    <a href={`?${qs}`}>
      {children}
    </a>
  );
};

PageButton.propTypes = {
  page: PropTypes.number,
  colors: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageButton.defaultProps = {
  page: null,
  colors: null,
};

const NavItems = ({
  filter,
  page,
  position,
  colors,
  end,
}) => {
  const opt = createOptions();
  const options = Object.entries(opt).map(([value, item]) => ({
    value,
    label: item.label,
  }));

  const onChange = (ev) => {
    const value = opt[ev.target.value];
    console.log('Redirect', value);
    if (value) {
      Router.push('/error', value.url);
    }
  };

  return (
    <S.NavWrapper position={position}>
      <Container className="flex">
        <div className={`flex flex-1 trending--${position}`}>
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
        <div className={`flex paginator paginator--${position}`}>
          <PageButton page={page > 1 ? page - 1 : null} colors={colors}>
            <Button primary disabled={page === 1}>
              <ChevronLeft className="left" />
              <span>Anterior</span>
            </Button>
          </PageButton>
          <PageButton page={page + 1} colors={colors}>
            <Button primary disabled={end}>
              <span>Próximo</span>
              <ChevronRight className="right" />
            </Button>
          </PageButton>
        </div>
      </Container>
    </S.NavWrapper>
  );
};

NavItems.propTypes = {
  position: PropTypes.string,
  colors: PropTypes.string,
  filter: PropTypes.string,
  page: PropTypes.number.isRequired,
  end: PropTypes.bool,
};

NavItems.defaultProps = {
  colors: null,
  end: false,
  position: 'top',
  filter: 'all',
};

export default NavItems;
