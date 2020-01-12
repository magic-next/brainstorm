import React, { useEffect, useRef } from 'react';
import CardType from '@/types/Card';
import useWindowDimensions from '../../../hooks/windowDimensions';

import * as S from './styled';

const tolerance = 20;

const Preview = ({ card }) => {
  const containerRef = useRef(null);
  const windowDimensions = useWindowDimensions();

  const moveCard = (ev) => {
    const { current: container } = containerRef;
    if (!container) return;
    const { clientY: Y, clientX: X } = ev;
    const distance = windowDimensions.height - (Y + container.offsetHeight + tolerance);
    const horizontal = windowDimensions.width - (X + container.offsetWidth);
    const positionTop = Math.min(0, distance);
    container.style.top = `${(Y + positionTop)}px`;
    const left = horizontal < 0 ? (X - container.offsetWidth - tolerance) : X;
    container.style.left = `${left}px`;
  };
  const removeEvent = () => document.removeEventListener('mousemove', moveCard);

  useEffect(() => {
    if (card) {
      document.addEventListener('mousemove', moveCard);
      return removeEvent;
    }
    return removeEvent;
  }, [card]);

  return (
    <S.PreviewWrapper disabled={!card} ref={containerRef}>
      {card && (
        <S.CardWrapper
          card={card}
          version="large"
        />
      )}
    </S.PreviewWrapper>
  );
};

Preview.propTypes = {
  card: CardType,
};

Preview.defaultProps = {
  card: null,
};

export default Preview;
