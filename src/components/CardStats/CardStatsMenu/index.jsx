import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from '@/components/Button';
import * as S from './styled';

const Menu = ({ option, cardId }) => {
  const url = `/card/${cardId}`;
  return (
    <S.ContainerWrapper className="flex">
      <h4>Ver como:</h4>
      <Link href={url}>
        <a>
          <Button primary flat={option === 'stats'}>Comandante</Button>
        </a>
      </Link>
      <Link href={`${url}?commander=0`}>
        <a>
          <Button primary flat={option === 'card'}>Carta</Button>
        </a>
      </Link>
      <Link href={`${url}/average`}>
        <a>
          <Button primary flat={option === 'average'}>Deck</Button>
        </a>
      </Link>
    </S.ContainerWrapper>
  );
};

Menu.propTypes = {
  option: PropTypes.string,
  cardId: PropTypes.string.isRequired,
};

Menu.defaultProps = {
  option: null,
};

export default Menu;