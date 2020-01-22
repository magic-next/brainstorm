import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import RankingType from '../../types/Ranking';
import RankingPiece from '../Ranking/RankingPiece';

const Panel = ({ ranking }) => (
  <S.PanelWrapper>
    {ranking.map((card, index) => (
      <RankingPiece
        key={index.toString()}
        ranking={card}
      />
    ))}
  </S.PanelWrapper>
);

Panel.propTypes = {
  ranking: PropTypes.arrayOf(RankingType).isRequired,
};

export default Panel;
