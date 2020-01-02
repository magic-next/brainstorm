import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Filter } from 'styled-icons/boxicons-regular/Filter';
import CardSymbols from '@/components/CardSymbols';
import { colorsCombinations } from '@/utils';
import items from './content';
import * as S from './styled';

const RankingNavFilter = ({ show, colors }) => {
  if (!show) {
    return null;
  }
  const [menu, setMenu] = useState(false);
  const title = !colors ? 'Todas as cores' : `Comandantes ${colorsCombinations[colors]}`;
  const [menuIndex, setMenuIndex] = useState(-1);
  const toggle = () => {
    if (!menu) {
      setMenu(true);
      return;
    }
    setMenu(false);
    setMenuIndex(-1);
  };
  return (
    <S.FilterWrapper className="flex">
      <div className="ranking-filter relative">
        <div
          tabIndex="0"
          className="ranking-filter__label flex pointer"
          role="menuitem"
          onClick={toggle}
          onKeyDown={() => null}
        >
          <Filter />
          <h4>{title}</h4>
        </div>
        <ul className={`dropdown ${!menu ? '' : 'dropdown--active'}`}>
          <a href="/commanders" className="dropdown--item">Todas as cores</a>
          {items.map((item, index) => (
            <li
              className="dropdown--item relative"
              key={index.toString()}
              tabIndex="0"
              role="menuitem"
              onKeyDown={() => null}
              onClick={() => setMenuIndex(index)}
            >
              {item.title}
              <ul className={`dropdown ${menuIndex !== index ? '' : 'dropdown--active'}`}>
                {item.combinations.map((combination, ix) => (
                  <a href={`?colors=${combination.symbols.replace(/[{}]/g, '')}`} className="dropdown--item" key={ix.toString()}>
                    <CardSymbols text={combination.symbols} />
                    <span className="color-combination">
                      {combination.title}
                    </span>
                  </a>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </S.FilterWrapper>
  );
};

RankingNavFilter.propTypes = {
  show: PropTypes.bool,
  colors: PropTypes.string,
};

RankingNavFilter.defaultProps = {
  show: false,
  colors: null,
};

export default RankingNavFilter;
