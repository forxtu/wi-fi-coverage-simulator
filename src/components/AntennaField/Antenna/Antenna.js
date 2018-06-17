import React from 'react';
import PropTypes from 'prop-types';

import './Antenna.css';

const Antenna = props => {
  const AntennaArea = {
    border: '50px solid #d2d8e0'
  };
  return (
    <div className="Antenna">
      <div className="Antenna__item" style={AntennaArea}></div>
    </div>
  );
};

Antenna.propTypes = {
  children: PropTypes.node
};

export default Antenna;
