import styled from 'styled-components';
import * as V from '../../../styles';

export const SearchWrapper = styled.div`
  color: white;
  margin-left: 1rem;
  /* background-color: rgba(0, 0, 0, .2); */
  padding: 1rem;
  border-radius: 3px;
  .react-autocomplete-input {
    margin-top: 2rem;
  }
  svg {
    width: 2rem;
    margin-right: .5rem;
  }
  .react-autosuggest__container {
    display: inline-block;
    position: relative;
  }
  .react-autosuggest__suggestions-container {
    background-color: white;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 0 10px 0 #888;
    position: absolute;
    width: 100%;
    top: 2.5rem;
    left: 0;
  }
  .react-autosuggest__suggestion {
    padding: .75rem;
    font-family: ${V.fonts.default};
    color: #333;
    font-size: 1.4rem;
    &--highlighted {
      background: rgba(0, 0, 0, .15);
    }
  }
  input {
    background-color: transparent;
    border: 0;
    color: white;
    &::placeholder {
      color: rgba(255, 255, 255, .8);
    }
  }
`;
