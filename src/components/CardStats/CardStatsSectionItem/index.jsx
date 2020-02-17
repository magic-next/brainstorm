import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import * as S from './styled';
import CardType from '@/types/Card';

const SectionItem = ({ card, version, name }) => {
  const cardItems = card.cards || [card];
  const multiple = cardItems.length > 1;
  return (
    <S.GridItemWrapper key={card.id}>
      <div className={`card-section__item ${multiple ? 'card-section__item--multiple' : ''} relative`}>
        <div className="card-section__item__card relative">
          {(cardItems).map((cardItem) => (
            <Link href={`/card/${cardItem.slug}`} key={cardItem.id}>
              <a title={cardItem.name}>
                <S.CardWrapper
                  card={cardItem}
                  version={version}
                />
              </a>
            </Link>
          ))}
          {!name ? null : (
            <S.CardNameWrapper dangerouslySetInnerHTML={{ __html: name(cardItems[0]) }} />
          )}
        </div>
      </div>
    </S.GridItemWrapper>
  );
};

SectionItem.propTypes = {
  name: PropTypes.func,
  version: PropTypes.string,
  card: CardType.isRequired,
};

SectionItem.defaultProps = {
  name: null,
  version: 'small',
};

export default SectionItem;
