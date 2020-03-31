import React from 'react';
import PropTypes from 'prop-types';

import CardStatsSectionItem from '../CardStatsSectionItem';

import * as S from './styled';
import CardDetailsType from '../../../types/CardDetails';

const CardsSection = ({
  title,
  cards,
  version,
  name,
}) => {
  if (!cards || !cards.length) {
    return null;
  }
  return (
    <S.SectionWrapper className="card-section">
      <h1 className="title">{title}</h1>
      <S.GridWrapper>
        {cards.map((card, index) => (
          <CardStatsSectionItem
            key={index.toString()}
            card={card}
            version={version}
            name={name}
          />
        ))}
      </S.GridWrapper>
    </S.SectionWrapper>
  );
};

CardsSection.propTypes = {
  title: PropTypes.string,
  name: PropTypes.func,
  version: PropTypes.string,
  cards: CardDetailsType.top.isRequired,
};

CardsSection.defaultProps = {
  title: null,
  name: null,
  version: 'small',
};

export default CardsSection;
