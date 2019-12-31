import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@/components/Modal';
import CardSymbols from '@/components/CardSymbols';
import items from './content';
import * as S from './styled';

const RankingNavFilter = ({ show }) => {
  const isVisible = !!show;
  return (
    <Modal show={isVisible} close={() => false}>
      <S.FilterWrapper>
        <h2 className="text--medium">Filtrar por cores</h2>
        {items.map((item) => (
          <S.FilterRowWrapper>
            <h4 className="text--medium">{item.title}</h4>
            <div className="colors">
              {item.combinations.map((combination) => (
                <>
                  <span>{combination.title}</span>
                  <CardSymbols text={combination.symbols} />
                </>
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
};

RankingNavFilter.defaultProps = {
  show: false,
};

export default RankingNavFilter;
