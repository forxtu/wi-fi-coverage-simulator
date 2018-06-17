import React from 'react';
import PropTypes from 'prop-types';

import '../Sidebar.css';
import './TxPower.css';

const TxPower = props => {
  const powerList = props.txPower.map(powerOption => (
    <option key={`${powerOption.power}_power`} value={powerOption.power}>
      {powerOption.power}
    </option>
  ));

  return (
    <div className="TxPower">
      <h2 className="Sidebar__title">{props.children}</h2>
      <select onChange={props.handlePowerChange} value={props.selectedPower}>{powerList}</select>
    </div>
  );
};

TxPower.propTypes = {
  children: PropTypes.node,
  txPower: PropTypes.arrayOf(PropTypes.object),
  handlePowerChange: PropTypes.func,
  selectedPower: PropTypes.string
};

export default TxPower;
