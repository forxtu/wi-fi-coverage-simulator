import React from 'react';
import { node, array, func, string, any } from 'prop-types';

import Antenna from './Antenna/Antenna';
import Clients from './Clients/Clients';
import './AntennaField.css';

const AntennaField = props => {
  return (
    <div className="AntennaField">
      <Clients clients={props.clients} isClientActive={props.isClientActive} />
      <Antenna
        calculatedDistance={props.calculatedDistance}
        activateClientAccess={props.activateClientAccess}
        disableClientAccess={props.disableClientAccess}
        isClientActive={props.isClientActive}
      />
      <div className="AntennaField__distance-indicator">100m</div>
    </div>
  );
};

AntennaField.propTypes = {
  children: node,
  selectedPower: any,
  selectedRadio: any,
  calculatedDistance: any,
  clients: array,
  isClientActive: string,
  activateClientAccess: func,
  disableClientAccess: func
};

export default AntennaField;
