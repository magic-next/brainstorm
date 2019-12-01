import React, { useState } from 'react';
import Router from 'next/router';
import { Search } from 'styled-icons/boxicons-regular/Search';
import Autosuggest from 'react-autosuggest';

import { search } from '../../../services/cards';
import * as S from './styled';

const renderSuggestion = (suggestion) => (
  <div>
    {suggestion.name}
  </div>
);

const SearchBox = () => {
  const [cards, setCards] = useState([]);
  const [text, setText] = useState('');
  const [requestCtrl, setRequestCtrl] = useState(null);

  const handleSearch = async ({ value }) => {
    if (value.length < 3) return;
    if (requestCtrl) requestCtrl.abort();
    const [promise, controller] = search(value);
    setRequestCtrl(controller);
    const res = await promise.catch(() => null);
    if (!res) return;
    setCards(res);
  };

  const onChange = (event, { newValue }) => setText(newValue);
  const inputProps = {
    onChange,
    placeholder: 'Pesquisar carta...',
    value: text,
  };

  const onSelect = (ev, { suggestion }) => {
    Router.push(`/card/${suggestion.id}`);
  };

  return (
    <S.SearchWrapper>
      <Search />
      <Autosuggest
        className="suggest"
        suggestions={cards}
        onSuggestionsFetchRequested={handleSearch}
        onSuggestionsClearRequested={() => setCards([])}
        getSuggestionValue={(item) => item.name}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSelect}
      />
      {/* <input type="text" placeholder="Pesquisar carta..." /> */}
    </S.SearchWrapper>
  );
};

export default SearchBox;
