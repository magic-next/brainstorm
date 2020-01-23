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

const CardSymbol = ({
  symbol,
  size,
  shadow,
  className,
}) => {
  if (!/^{[\d\w]+}$/ig.test(symbol)) {
    return symbol;
  }
  const sym = symbol.replace(/[{}]/ig, '');
  const num = allowedSymbols[sym] ? false : sym;
  const title = `${num || 1} mana ${colors[sym] || 'genérica'}`;
  const symClass = `s${sym}`.toLowerCase();
  return (
    <span
      title={title}
      className={`${className} mana ${size} ${symClass} ${shadow ? 'shadow' : ''}`}
    />
  );
};

const propSize = PropTypes.oneOf(['small', 'medium', 'large']);

CardSymbol.propTypes = {
  className: PropTypes.string,
  symbol: PropTypes.string.isRequired,
  shadow: PropTypes.bool,
  size: propSize,
};

CardSymbol.defaultProps = {
  className: '',
  size: 'medium',
  shadow: false,
};

const CardSymbols = ({
  text,
  className,
  size,
  shadow,
}) => {
  const parts = text
    .split(/(\{[\d\w]+\})/ig)
    .filter((x) => x);
  return (
    <>
      {parts.map((part, index) => (
        <CardSymbol
          size={size}
          shadow={shadow}
          className={className}
          key={index.toString()}
          symbol={part}
        />
      ))}
    </>
  );
};

CardSymbols.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  shadow: PropTypes.bool,
  size: propSize,
};

CardSymbols.defaultProps = {
  className: null,
  shadow: false,
  size: 'medium',
};

export default CardSymbols;
