import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button';
import * as S from './styled';

const categoryText = (cards) => cards
  .map(({ name, count }) => `${count} ${name}`)
  .join('\n');

const genList = (entries) => entries
  .map(([, cards]) => categoryText(cards))
  .join('\n');

const DeckViewCopy = ({ deckEntries }) => {
  if (typeof document !== 'undefined' && !document.queryCommandSupported('copy')) {
    return null;
  }

  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.value = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  const [copied, setCopied] = useState(false);
  const copyList = () => {
    copyToClipboard(genList(deckEntries));
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const text = copied ? 'Deck copiado!' : 'Copiar Deck';

  return (
    <S.ButtonWrapper onClick={copyList}>
      <Button small primary flat={copied}>{text}</Button>
    </S.ButtonWrapper>
  );
};

DeckViewCopy.propTypes = {
  deckEntries: PropTypes.arrayOf(
    PropTypes.arrayOf(),
  ),
};

DeckViewCopy.defaultProps = {
  deckEntries: [],
};

export default DeckViewCopy;
