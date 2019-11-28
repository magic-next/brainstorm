/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { format, subMonths, subYears } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Filter } from 'styled-icons/boxicons-regular/Filter';
import { TrendingUp } from 'styled-icons/feather/TrendingUp';

import Container from '../Container';
import Select from '../Select';
import * as S from './styled';
import Nav from '../Nav';

const active = (name, filter) => (name === filter ? 'active' : '');

const NavItems = ({ filter }) => {
  const config = { locale: ptBR };
  const date = new Date();

  const month = format(subMonths(date, 1), 'MMMM', config);
  const year = format(date, 'yyyy', config);
  const prevYear = format(subYears(date, 1), 'yyyy', config);
  const basePath = '/commanders';

  const options = [
    { value: 'week', label: 'Última semana' },
    { value: 'month', label: month },
    { value: 'year', label: year },
    { value: 'years', label: `${year} e ${prevYear}` },
  ];

  return (
    <Nav>
      <S.NavWrapper>
        <Container className="flex">
          <div className="left flex">
            <TrendingUp title="Filtrar ranking" />
            <h1>Comandantes em alta</h1>
            <Select options={options} />
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
  filter: '',
};

export default NavItems;
