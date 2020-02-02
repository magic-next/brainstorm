import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import * as S from './styled';
import CardDetailsType from '../../../types/CardDetails';

const CardsSection = ({
  title,
  cards,
  version,
  name,
}) => (!cards.length ? null : (
  <S.SectionWrapper className="card-section">
    <h1 className="title">{title}</h1>
    <S.GridWrapper>
      {cards.map((card) => (
        <Link href={`/card/${card.slug}`} key={card.id}>
          <a title={card.name}>
            <S.CardWrapper
              card={card}
              version={version}
            />
            {!name ? null : (
              <S.CardNameWrapper dangerouslySetInnerHTML={{ __html: name(card) }} />
            )}
          </a>
        </Link>
      ))}
    </S.GridWrapper>
  </S.SectionWrapper>
));

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
