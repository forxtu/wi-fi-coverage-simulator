import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Client from './Client/Client';
import './Clients.css';

class Clients extends Component {
  constructor(props) {
    super(props);

    this.generateClients = this.generateClients.bind(this);
  }
  // generateClientStyle() {
  //   let clientStyle = {
  //     backgroundColor: !this.props.isClientActive ? '#24B77D' : '#FC3516'
  //   };
  //   console.log(clientStyle.backgroundColor);
  // }
  generateClients() {
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
        backgroundColor: !this.props.isClientActive ? '#24B77D' : '#FC3516'
      };

      // return <div key={item} style={clientStyle} className="Clients__item" />;
      return <Client key={item} clientStyle={clientStyle} />;
    });
  }
  componentDidMount() {
    this.generateClients();
    // this.generateClientStyle();
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.isClientActive !== this.props.isClientActive) {
      // this.setState({loading: true}, this.updateData);
      this.generateClients();
      // this.generateClientStyle();
      console.log('props changed');
    }
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
