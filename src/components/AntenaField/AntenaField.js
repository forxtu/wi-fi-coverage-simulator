import React from 'react';
import PropTypes from 'prop-types';

import Antena from './Antena/Antena';
import './AntenaField.css';

const AntenaField = props => (
    <div className="AntenaField">
      <Antena />
    </div>
);

AntenaField.propTypes = {
  children: PropTypes.node
};

export default AntenaField;
