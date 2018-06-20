import React from 'react';
import PropTypes from 'prop-types';

import './Client.css';

const Client = props => {
  return <div className="Clients__item" style={props.clientStyle} />;
};

Client.propTypes = {
  children: PropTypes.node,
  clients: PropTypes.node,
  isClientActive: PropTypes.bool
};

export default Client;
