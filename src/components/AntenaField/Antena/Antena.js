import React from 'react';
import PropTypes from 'prop-types';

import './Antena.css';

const Antena = props => {
  const antenaArea = {
    border: '50px solid #d2d8e0'
  };
  return (
    <div className="Antena">
      <div className="Antena__item" style={antenaArea}></div>
    </div>
  );
};

Antena.propTypes = {
  children: PropTypes.node
};

export default Antena;
