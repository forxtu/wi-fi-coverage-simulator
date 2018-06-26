import React, { Component } from 'react';
import { node } from 'prop-types';

import Client from './Client/Client';
import './Clients.css';

class Clients extends Component {
  componentDidMount() {
    this.clients = this.props.clients.map(item => {
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
  }
  render() {
    return <div className="Clients">{this.clients}</div>;
  }
}

Clients.propTypes = {
  clients: node
};

export default Clients;
