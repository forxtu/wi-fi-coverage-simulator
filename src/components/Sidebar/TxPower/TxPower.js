import React from 'react';
import { arrayOf, object, func, node, any } from 'prop-types';
import { capitalize } from 'utils/functions';

import '../Sidebar.css';
import './TxPower.css';

const TxPower = props => {
  const powerList = props.txPower.map(powerOption => (
    <option key={`${powerOption.power}_power`} value={powerOption.numericPower}>
      {capitalize(powerOption.type)} ({powerOption.power})
    </option>
  ));

  return (
    <div className="TxPower">
      <h2 className="Sidebar__title">{props.children}</h2>
      <select onChange={props.onPowerChange} value={props.selectedPower}>
        {powerList}
      </select>
    </div>
  );
};

TxPower.propTypes = {
  children: node,
  txPower: arrayOf(object),
  onPowerChange: func,
  selectedPower: any
};

export default TxPower;
