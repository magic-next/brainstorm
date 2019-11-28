import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ options, placeholder, value }) => (
  <select>
    <option selected={value === null} value={null} disabled>{placeholder}</option>
    {options.map((item) => (
      <option
        selected={value === item.value}
        key={item.value}
        value={item.value}
      >
        {item.label}
      </option>
    ))}
  </select>
);

const Value = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

const Option = PropTypes.shape({
  label: PropTypes.string,
  value: Value,
});

Select.propTypes = {
  options: PropTypes.arrayOf(Option),
  placeholder: PropTypes.string,
  value: Value,
};

Select.defaultProps = {
  options: [],
  placeholder: '-- Selecione uma opção --',
  value: null,
};

export default Select;
