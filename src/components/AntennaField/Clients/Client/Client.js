import React from 'react';
import { object } from 'prop-types';

import './Client.css';

const Client = props => {
  return <div className="Clients__item" style={props.clientStyle} />;
};

Client.propTypes = {
  clientStyle: object
};

export default Client;
