import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Card from '../../Card';

import * as S from './styled';
import CardDetailsType from '../../../types/CardDetails';

const CardsSection = ({
  title,
  cards,
  version,
  name,
}) => (
  <S.SectionWrapper>
    <h1 className="title">{title}</h1>
    <S.GridWrapper>
      {cards.map((card) => (
        <Link href={`/card/${card.id}`} key={card.id}>
          <a title={card.name}>
            <Card
              card={card}
              version={version}
            />
            {!name ? null : (
              <S.CardNameWrapper>{name(card)}</S.CardNameWrapper>
            )}
          </a>
        </Link>
      ))}
    </S.GridWrapper>
  </S.SectionWrapper>
);

CardsSection.propTypes = {
  title: PropTypes.string,
  name: PropTypes.func,
  version: PropTypes.string,
  cards: CardDetailsType.top.isRequired,
};

CardsSection.defaultProps = {
  title: null,
  name: null,
  version: 'normal',
};

export default CardsSection;
