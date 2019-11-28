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
import Nav from '../Nav';

const NavItems = ({ filter }) => {
  const config = { locale: ptBR };
  const date = new Date();

  const month = format(subMonths(date, 1), 'MMMM', config);
  const monthUpper = `${month.charAt(0).toUpperCase()}${month.slice(1)}`;
  const year = format(date, 'yyyy', config);
  const prevYear = format(subYears(date, 1), 'yyyy', config);
  const baseUrl = '/commanders';

  const opt = {
    all: { url: `${baseUrl}`, label: 'Qualquer' },
    week: { url: `${baseUrl}/week`, label: 'Última semana' },
    month: { url: `${baseUrl}/month`, label: monthUpper },
    year: { url: `${baseUrl}/year`, label: year },
    years: { url: `${baseUrl}/years`, label: `${year} e ${prevYear}` },
  };
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
    <Nav>
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
            <Button primary>
              <ChevronLeft className="left" />
              Anterior
            </Button>
            <Button primary>
              Próximo
              <ChevronRight className="right" />
            </Button>
          </div>
        </Container>
      </S.NavWrapper>
    </Nav>
  );
};

NavItems.propTypes = {
  filter: PropTypes.string,
};

NavItems.defaultProps = {
  filter: 'all',
};

export default NavItems;
