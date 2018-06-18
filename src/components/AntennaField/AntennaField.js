import React from 'react';
import PropTypes from 'prop-types';

import Antenna from './Antenna/Antenna';
import './AntennaField.css';

const AntennaField = props => (
  <div className="AntennaField">
    {props.selectedPower}/
    {props.selectedRadio}/
    {props.calculatedDistance}
    <Antenna calculatedDistance={props.calculatedDistance} />
  </div>
);

AntennaField.propTypes = {
  children: PropTypes.node,
  selectedPower: PropTypes.any,
  selectedRadio: PropTypes.any,
  calculatedDistance: PropTypes.any
};

export default AntennaField;
