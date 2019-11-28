import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const Select = ({
  options,
  placeholder,
  value,
  onChange,
  id,
}) => (
  <S.SelectWrapper id={id} onChange={onChange} value={value}>
    {placeholder === false ? null : (
      <option disabled>{placeholder}</option>
    )}
    {options.map((item) => (
      <option key={item.value} value={item.value}>
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
  onChange: PropTypes.func,
};

Select.defaultProps = {
  options: [],
  placeholder: false,
  onChange: null,
  value: undefined,
  id: null,
};

export default Select;
