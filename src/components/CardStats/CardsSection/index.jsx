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
        <div key={card.id} className="card-section__item">
          {(card.cards || [card]).map((cardItem, index) => (
            <div className="card-section__item__card">
              <Link href={`/card/${cardItem.slug}`}>
                <a title={cardItem.name}>
                  <S.CardWrapper
                    card={cardItem}
                    version={version}
                  />
                </a>
              </Link>
              {(!name || index) ? null : (
                <S.CardNameWrapper dangerouslySetInnerHTML={{ __html: name(cardItem) }} />
              )}
            </div>
          ))}
        </div>
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
  version: 'small',
};

export default CardsSection;
