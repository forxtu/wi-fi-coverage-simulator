import React from 'react';
import PropTypes from 'prop-types';

import '../Sidebar.css';
import './RadioOptions.css';

const RadioOptions = props => {
  const radioOptionsList = props.radioOptions.map(radioOption => (
    <li key={`${radioOption.freq}_radio`} className="RadioOptions__items-group">
      <input
        className="RadioOptions__items-input"
        name="radioOption"
        type="radio"
        value={radioOption.numericFreq}
        id={`${radioOption.freq}_radio_id`}
        checked={radioOption.numericFreq == props.selectedRadio}
        onChange={props.handleRadioChange}
      />
      <label
        className="RadioOptions__items-label"
        htmlFor={`${radioOption.freq}_radio_id`}
      >
        {radioOption.freq}
      </label>

      <div className="RadioOptions__items-check" />
    </li>
  ));

  return (
    <div className="RadioOptions">
      <h2 className="Sidebar__title">{props.children}</h2>
      <ul className="RadioOptions__items-wrap">{radioOptionsList}</ul>
    </div>
  );
};

RadioOptions.propTypes = {
  children: PropTypes.node,
  radioOptions: PropTypes.arrayOf(PropTypes.object),
  handleRadioChange: PropTypes.func,
  selectedRadio: PropTypes.any
};

export default RadioOptions;
