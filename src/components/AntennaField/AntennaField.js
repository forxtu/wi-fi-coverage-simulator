import React from 'react';
import PropTypes from 'prop-types';

import Antenna from './Antenna/Antenna';
import Clients from './Clients/Clients';
import './AntennaField.css';

const AntennaField = props => {
  return (
    <div className="AntennaField">
      <Clients clients={props.clients} />
      <Antenna calculatedDistance={props.calculatedDistance} />
    </div>
  );
};

AntennaField.propTypes = {
  children: PropTypes.node,
  selectedPower: PropTypes.any,
  selectedRadio: PropTypes.any,
  calculatedDistance: PropTypes.any,
  clients: PropTypes.any
};

export default AntennaField;
