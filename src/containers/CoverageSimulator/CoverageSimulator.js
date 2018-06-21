import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from 'components/Sidebar/Sidebar';
import AntennaField from 'components/AntennaField/AntennaField';
import './CoverageSimulator.css';
import * as actionTypes from 'store/actions';

class CoverageSimulator extends Component {
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
      // clients: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      // isClientActive: false
    };
    this.baseState = this.state;

    this.handlePowerChange = this.handlePowerChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.toggleClientAccessHandler = this.toggleClientAccessHandler.bind(this);
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
    console.log(e.target.value);
    console.log(this.state.selectedRadio);
  }
  handleSave() {
    this.calculateDistance(this.state.selectedPower, this.state.selectedRadio);
  }
  handleCancel() {
    this.setState(this.baseState);
  }

  calculateDistance(txPowerValue, freqInMHz) {
    let receiverSensitivity = -80;
    let receiveAntennaGain = 1;
    let FSPL = txPowerValue - receiverSensitivity + receiveAntennaGain;
    let distance = (27.55 - 20 * Math.log10(freqInMHz) + Math.abs(FSPL)) / 20;
    // console.log(Math.pow(10, distance).toFixed());
    this.setState(() => ({
      calculatedDistance: Math.pow(10, distance).toFixed()
    }));
    // return Math.pow(10, distance).toFixed();
  }

  toggleClientAccessHandler() {
    this.setState(prevState => ({
      isClientActive: !prevState.isClientActive
    }));
  }

  componentDidMount() {
    this.calculateDistance(this.state.selectedPower, this.state.selectedRadio);
  }
  // UNSAFE_componentWillMount() {
  //   this.calculateDistance(this.state.selectedPower, this.state.selectedRadio);
  // }

  render() {
    const state = this.state;
    return (
      <div className="CoverageSimulator">
        <AntennaField
          selectedPower={state.selectedPower}
          selectedRadio={state.selectedRadio}
          calculatedDistance={state.calculatedDistance}
          clients={state.clients}
          isClientActive={this.props.clientStatus}
          // isClientActive={state.isClientActive}
          // toggleClientAccess={this.toggleClientAccessHandler}
          activateClientAccess={this.props.onStatusActivate}
          disableClientAccess={this.props.onStatusDisable}
        />
        <Sidebar
          txPower={state.txPower}
          radioOptions={state.radioOptions}
          handlePowerChange={this.handlePowerChange}
          handleRadioChange={this.handleRadioChange}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
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
    onStatusActivate: () =>
      dispatch({ type: actionTypes.ACTIVATE_CLIENT_STATUS }),
    onStatusDisable: () => dispatch({ type: actionTypes.DISABLE_CLIENT_STATUS })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoverageSimulator);
