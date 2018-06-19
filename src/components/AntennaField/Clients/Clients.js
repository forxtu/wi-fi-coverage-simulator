import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Clients.css';

class Clients extends Component {
  constructor(props) {
    super(props);
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
      const clientStyle = {
        left: `${posX}px`,
        top: `${posY}px`,
        backgroundColor: this.props.isClientActive ? '#24B77D' : '#FC3516'
      };

      return <div key={item} style={clientStyle} className="Clients__item" />;
    });
  }
  render() {
    return <div className="Clients">{this.clients}</div>;
  }
}

Clients.propTypes = {
  children: PropTypes.node,
  clients: PropTypes.node,
  isClientActive: PropTypes.bool
};

export default Clients;
