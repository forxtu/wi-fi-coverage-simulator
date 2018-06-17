import React from 'react';
import PropTypes from 'prop-types';

const TxPower = props => {
  // const powerList = props.txPower.map((item) => {
  //   return
  // });

  return (
    <div className="TxPower">
      <h2>{props.children}</h2>
      <h1>{props.txPower}</h1>
      {/* <select>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> */}
    </div>
  );
};

TxPower.propTypes = {
  children: PropTypes.node,
  txPower: PropTypes.string
};

export default TxPower;
