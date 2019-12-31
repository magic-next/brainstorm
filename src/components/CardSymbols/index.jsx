import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const colors = {
  U: 'azul',
  W: 'branca',
  R: 'vermelha',
  B: 'preta',
  G: 'verde',
  C: 'incolor',
};

const CardSymbol = ({ symbol }) => {
  const sym = symbol.replace(/[{}]/ig, '');
  const num = colors[sym] || sym === 'X' ? false : sym;
  const title = `${num || 1} mana ${colors[sym] || 'genérica'}`;
  return (
    <S.AbbrWrapper
      type={num ? 'N' : sym}
      title={title}
    >
      {sym}
    </S.AbbrWrapper>
  );
};

CardSymbol.propTypes = {
  symbol: PropTypes.string.isRequired,
};

const CardSymbols = ({ text }) => {
  const [...symbols] = text.matchAll(/\{[\w\d]\}/gi) || [];
  const replaced = text.replace(/\{(\w+)\}/gi, '');
  return (
    <>
      <span>{replaced}</span>
      {symbols.map((sym, index) => (
        <CardSymbol key={index.toString()} symbol={sym[0]} />
      ))}
    </>
  );
};

CardSymbols.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CardSymbols;
