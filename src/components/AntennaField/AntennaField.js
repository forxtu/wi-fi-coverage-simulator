import React from 'react';
import PropTypes from 'prop-types';

import Antenna from './Antenna/Antenna';
import Clients from './Clients/Clients';
import './AntennaField.css';

const AntennaField = props => {
  return (
    <div className="AntennaField">
      <Clients clients={props.clients} isClientActive={props.isClientActive} />
      <Antenna
        calculatedDistance={props.calculatedDistance}
        toggleClientAccess={props.toggleClientAccess}
      />
    </div>
  );
};

AntennaField.propTypes = {
  children: PropTypes.node,
  selectedPower: PropTypes.any,
  selectedRadio: PropTypes.any,
  calculatedDistance: PropTypes.any,
  clients: PropTypes.any,
  isClientActive: PropTypes.bool,
  toggleClientAccess: PropTypes.func
};

export default AntennaField;
