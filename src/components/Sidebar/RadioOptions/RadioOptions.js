import React from 'react';
import PropTypes from 'prop-types';

const RadioOptions = props => {
  return (
    <div className="RadioOptions">
      <h2>{props.children}</h2>
      <h1> {props.radioOptions} </h1>
    </div>
  );
};

RadioOptions.propTypes = {
  children: PropTypes.node,
  radioOptions: PropTypes.arrayOf(PropTypes.string)
};

export default RadioOptions;
