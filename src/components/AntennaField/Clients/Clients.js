import React from 'react';
import PropTypes from 'prop-types';

import './Clients.css';

const Clients = props => {
  let clients = props.clients.map(item => {
    let divSize = 10;
    let posX = (Math.random() * (document.body.clientWidth - divSize - 250)).toFixed();
    let posY = (Math.random() * (document.body.clientHeight - divSize)).toFixed();
    const clientStyle = {
      position: 'absolute',
      left: `${posX}px`,
      top: `${posY}px`,
      backgroundColor: 'red',
      width: '10px',
      height: '10px',
      borderRadius: '50%'
    };

    return <div key={item} style={clientStyle}></div>;
  });
  return <div className="Clients">{clients}</div>;
};

Clients.propTypes = {
  children: PropTypes.node,
  clients: PropTypes.node
};

export default Clients;
