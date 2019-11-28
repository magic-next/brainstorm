import React from 'react';
import { format, subMonths, subYears } from 'date-fns';
import { ptBR } from 'date-fns/locale';
// import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { TrendingUp } from 'styled-icons/feather/TrendingUp';

import Container from '../Container';
import Select from '../Select';
import * as S from './styled';
import Nav from '../Nav';

const NavItems = () => {
  const config = { locale: ptBR };
  const date = new Date();

  const month = format(subMonths(date, 1), 'MMMM', config);
  const monthUpper = `${month.charAt(0).toUpperCase()}${month.slice(1)}`;
  const year = format(date, 'yyyy', config);
  const prevYear = format(subYears(date, 1), 'yyyy', config);
  const baseUrl = '/commanders';

  const opt = {
    all: { url: `${baseUrl}/`, label: 'Qualquer' },
    week: { url: `${baseUrl}/week`, label: 'Última semana' },
    month: { url: `${baseUrl}/month`, label: monthUpper },
    year: { url: `${baseUrl}/year`, label: year },
    years: { url: `${baseUrl}/years`, label: `${year} e ${prevYear}` },
  };
  const options = Object.entries(opt).map(([value, item]) => ({
    value,
    label: item.label,
  }));

  return (
    <Nav>
      <S.NavWrapper>
        <Container className="flex">
          <div className="left flex flex-1">
            <TrendingUp title="Filtrar ranking" />
            <h1>Comandantes em alta </h1>
            <label htmlFor="filter">
              <span>no período</span>
              <Select id="filter" name="filter" options={options} />
            </label>
          </div>
        </Container>
      </S.NavWrapper>
    </Nav>
  );
};

NavItems.propTypes = {
};

NavItems.defaultProps = {
};

export default NavItems;
