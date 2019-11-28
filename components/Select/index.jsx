import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Select = ({
  options,
  placeholder,
  value,
  id,
}) => (
  <S.SelectWrapper id={id}>
    {placeholder === false ? null : (
      <option selected={value === null} value={null} disabled>{placeholder}</option>
    )}
    {options.map((item) => (
      <option
        selected={value === item.value}
        key={item.value}
        value={item.value}
      >
        {item.label}
      </option>
    ))}
  </S.SelectWrapper>
);

const Value = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const Option = PropTypes.shape({
  label: PropTypes.string,
  value: Value,
});

Select.propTypes = {
  options: PropTypes.arrayOf(Option),
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  value: Value,
  id: PropTypes.string,
};

Select.defaultProps = {
  options: [],
  placeholder: false,
  value: null,
  id: null,
};

export default Select;
