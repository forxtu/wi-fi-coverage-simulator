import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Client from './Client/Client';
import './Clients.css';

class Clients extends Component {
  render() {
    const clients = this.props.clients.map(item => {
      let divSize = 10;
      let posX = (
        Math.random() *
        (document.body.clientWidth - divSize - 250)
      ).toFixed();
      let posY = (
        Math.random() *
        (document.body.clientHeight - divSize)
      ).toFixed();
      let clientStyle = {
        left: `${posX}px`,
        top: `${posY}px`,
        backgroundColor: '#FC3516'
      };

      return <Client key={item} clientStyle={clientStyle} />;
    });
    return <div className="Clients">{clients}</div>;
  }
}

Clients.propTypes = {
  children: PropTypes.node,
  clients: PropTypes.node
};

export default Clients;
