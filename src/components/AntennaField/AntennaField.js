import React from 'react';
import PropTypes from 'prop-types';

import Antenna from './Antenna/Antenna';
import './AntennaField.css';

const AntennaField = props => (
    <div className="AntennaField">
      <Antenna />
    </div>
);

AntennaField.propTypes = {
  children: PropTypes.node
};

export default AntennaField;
