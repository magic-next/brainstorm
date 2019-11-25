import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';

import * as S from './styled';
import CommanderType from '../../types/Commander';

const CardsSection = ({
  title,
  cards,
  version,
  name,
}) => (
  <S.SectionWrapper>
    <h1 className="title">{title}</h1>
    <S.GridWrapper>
      {cards.map((card, index) => (
        <div>
          <Card
            key={index.toString()}
            card={card}
            version={version}
          />
          {!name ? null : (
            <S.CardNameWrapper>{name(card)}</S.CardNameWrapper>
          )}
        </div>
      ))}
    </S.GridWrapper>
  </S.SectionWrapper>
);

CardsSection.propTypes = {
  title: PropTypes.string,
  name: PropTypes.func,
  version: PropTypes.string,
  cards: CommanderType.top.isRequired,
};

CardsSection.defaultProps = {
  title: null,
  name: null,
  version: 'normal',
};

export default CardsSection;
