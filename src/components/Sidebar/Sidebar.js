import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TxPower from './TxPower/TxPower';
import RadioOptions from './RadioOptions/RadioOptions';

import './Sidebar.css';

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <TxPower txPower={props.txPower}>TX Power</TxPower>
      <RadioOptions radioOptions={props.radioOptions}>Radio</RadioOptions>
    </div>
  );
};

Sidebar.propTypes = {
  txPower: PropTypes.string,
  radioOptions: PropTypes.arrayOf(PropTypes.string)
};

export default Sidebar;
