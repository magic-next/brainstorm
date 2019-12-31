import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@/components/Modal';
import CardSymbols from '@/components/CardSymbols';
import items from './content';
import * as S from './styled';

const RankingNavFilter = ({ show, close }) => {
  const isVisible = !!show;
  return (
    <Modal show={isVisible} close={close}>
      <S.FilterWrapper>
        <h2 className="text--medium">Filtrar por cores</h2>
        {items.map((item) => (
          <S.FilterRowWrapper>
            <h4 className="text--medium">{item.title}</h4>
            <div className="colors grid">
              {item.combinations.map((combination, index) => (
                <div className="color-option pointer" key={index.toString()}>
                  <CardSymbols text={combination.symbols} />
                  <span>{combination.title}</span>
                </div>
              ))}
            </div>
          </S.FilterRowWrapper>
        ))}
      </S.FilterWrapper>
    </Modal>
  );
};

RankingNavFilter.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

RankingNavFilter.defaultProps = {
  show: false,
};

export default RankingNavFilter;
