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
const allowedSymbols = {
  ...Object.keys(colors)
    .reduce((p, c) => ({ ...p, [c]: true }), {}),
  X: true,
  T: true,
};

const CardSymbol = ({ symbol, className }) => {
  if (!/^{[\d\w]+}$/ig.test(symbol)) {
    return symbol;
  }
  const sym = symbol.replace(/[{}]/ig, '');
  const num = allowedSymbols[sym] ? false : sym;
  const title = `${num || 1} mana ${colors[sym] || 'genérica'}`;
  return (
    <S.AbbrWrapper
      type={num ? 'N' : sym}
      title={title}
      className={className}
    >
      {sym}
    </S.AbbrWrapper>
  );
};

CardSymbol.propTypes = {
  symbol: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CardSymbol.defaultProps = {
  className: null,
};

const CardSymbols = ({ text, className }) => {
  const parts = text
    .split(/(\{[\d\w]+\})/ig)
    .filter((x) => x);
  return (
    <>
      {parts.map((part, index) => (
        <CardSymbol className={className} key={index.toString()} symbol={part} />
      ))}
    </>
  );
};

CardSymbols.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

CardSymbols.defaultProps = {
  className: null,
};

export default CardSymbols;
