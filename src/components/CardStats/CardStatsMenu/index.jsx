import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button';
import * as S from './styled';

const Menu = ({ option }) => (
  <S.ContainerWrapper className="flex">
    <h4>Ver como:</h4>
    <Button primary flat={option === 'stats'}>Comandante</Button>
    <Button primary flat={option === ''}>Carta</Button>
    <Button primary flat={option === ''}>Deck</Button>
  </S.ContainerWrapper>
);

Menu.propTypes = {
  option: PropTypes.string,
};

Menu.defaultProps = {
  option: null,
};

export default Menu;
