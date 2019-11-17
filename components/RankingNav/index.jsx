/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { format, subMonths, subYears } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Filter } from 'styled-icons/boxicons-regular/Filter';
import Container from '../Container';
import * as S from './styled';
import Nav from '../Nav';

const active = (name, filter) => (name === filter ? 'active' : '');

const NavItems = ({ filter }) => {
  const date = new Date();
  const options = { locale: ptBR };
  const month = format(subMonths(date, 1), 'MMMM', options);
  const year = format(date, 'yyyy', options);
  const prevYear = format(subYears(date, 1), 'yyyy', options);
  return (
    <Nav>
      <S.NavWrapper>
        <Container>
          <ul>
            <li>
              <Filter title="Filtrar ranking" />
            </li>
            <li>
              <Link href={{ pathname: '/ranking/week' }}>
                <a className={active(filter, 'week')}>Última semana</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/ranking/month' }}>
                <a className={[active(filter, 'month'), 'capitalize'].join(' ')}>
                  {month}
                </a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/ranking/year' }}>
                <a className={active(filter, 'year')}>{year}</a>
              </Link>
            </li>
            <li>
              <Link href={{ pathname: '/ranking/years' }}>
                <a className={active(filter, 'years')}>
                  {`${prevYear} e ${year}`}
                </a>
              </Link>
            </li>
          </ul>
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
