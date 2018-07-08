import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func } from 'prop-types';

import Sidebar from 'components/Sidebar/Sidebar';
import AntennaField from 'components/AntennaField/AntennaField';
import './CoverageSimulator.css';
import {
  activateClientStatus,
  disableClientStatus
} from '../../store/clients/clientsActions';

class CoverageSimulator extends Component {
  static propTypes = {
    clientStatus: string,
    onStatusActivate: func,
    onStatusDisable: func
  };

  constructor() {
    super();
    this.state = {
      selectedPower: 4,
      selectedRadio: 2400,
      calculatedDistance: 177,
      txPower: [
        {
          type: 'high',
          power: '4dBm',
          numericPower: 4
        },
        {
          type: 'medium',
          power: '-6dBm',
          numericPower: -6
        },
        {
          type: 'low',
          power: '-16dBm',
          numericPower: -16
        }
      ],
      radioOptions: [
        {
          type: 'low',
          freq: '2.4GHz',
          numericFreq: 2400
        },
        {
          type: 'high',
          freq: '5GHz',
          numericFreq: 5000
        }
      ],
      clients: [...Array(10).keys()]
    };
    this.baseState = this.state;

    this.handlePowerChange = this.handlePowerChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handlePowerChange(e) {
    const newSelectedPower = e.target.value;
    this.setState(() => ({
      selectedPower: newSelectedPower
    }));
  }
  handleRadioChange(e) {
    const newSelectedRadio = e.target.value;
    this.setState(() => ({
      selectedRadio: newSelectedRadio
    }));
  }
  handleSave() {
    this.calculateDistance(this.state.selectedPower, this.state.selectedRadio);
  }
  handleCancel() {
    this.setState(this.baseState);
  }

  calculateDistance(selectedPower, selectedRadioFreq) {
    let receiverSensitivity = -80;
    let receiveAntennaGain = 1;
    let FSPL = selectedPower - receiverSensitivity + receiveAntennaGain;
    let distance =
      (27.55 - 20 * Math.log10(selectedRadioFreq) + Math.abs(FSPL)) / 20;
    this.setState(() => ({
      calculatedDistance: Math.pow(10, distance).toFixed()
    }));
  }

  componentDidMount() {
    this.calculateDistance(this.state.selectedPower, this.state.selectedRadio);
  }

  render() {
    const state = this.state;
    const props = this.props;
    return (
      <div className="CoverageSimulator">
        <AntennaField
          selectedPower={state.selectedPower}
          selectedRadio={state.selectedRadio}
          calculatedDistance={state.calculatedDistance}
          clients={state.clients}
          isClientActive={props.clientStatus}
          activateClientAccess={props.onStatusActivate}
          disableClientAccess={props.onStatusDisable}
        />
        <Sidebar
          txPower={state.txPower}
          radioOptions={state.radioOptions}
          onPowerChange={this.handlePowerChange}
          onRadioChange={this.handleRadioChange}
          onSave={this.handleSave}
          onCancel={this.handleCancel}
          selectedPower={state.selectedPower}
          selectedRadio={state.selectedRadio}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clientStatus: state.isClientActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStatusActivate: () => dispatch(activateClientStatus()),
    onStatusDisable: () => dispatch(disableClientStatus())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoverageSimulator);
