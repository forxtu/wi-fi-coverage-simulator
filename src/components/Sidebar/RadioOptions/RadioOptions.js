import React from 'react';
import PropTypes from 'prop-types';

import Aux from 'hoc/Aux';

import '../Sidebar.css';
import './RadioOptions.css';

const RadioOptions = props => {
  const radioOptionsList = props.radioOptions.map(radioOption => (
    <li
      key={`${radioOption.power}_radio`}
      className="RadioOptions__items-group"
      onChange={props.handleRadioChange}
    >
      <input
        className="RadioOptions__items-input"
        name="radioOption"
        type="radio"
        value={radioOption.power}
        id={`${radioOption.power}_radio_id`}
        // checked={radioOption.power === props.selectedRadio}
        defaultChecked={radioOption.power === props.selectedRadio}
      />
      <label
        className="RadioOptions__items-label"
        htmlFor={`${radioOption.power}_radio_id`}
      >
        {radioOption.power}
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
