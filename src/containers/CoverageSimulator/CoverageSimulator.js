import React, { Component } from 'react';

import Sidebar from 'components/Sidebar/Sidebar';
import AntennaField from 'components/AntennaField/AntennaField';
import './CoverageSimulator.css';

class CoverageSimulator extends Component {
  constructor() {
    super();
    this.state = {
      selectedPower: 4,
      selectedRadio: 2.4,
      txPower: [
        {
          type: 'high',
          power: '4dBm',
          numericPower: 4
        },
        {
          type: 'medium',
          power: '-6dBm',
          numericPower: 6
        },
        {
          type: 'low',
          power: '-16dBm',
          numericPower: 16
        }
        // '4dBm', '6dBm', '16dBm'
      ],
      radioOptions: [
        {
          type: 'low',
          power: '2.4GHz',
          numericPower: 2.4
        },
        {
          type: 'high',
          power: '5GHz',
          numericPower: 5
        }
        // '2.4GHz', '5GHz'
      ]
    };

    // this.handlePowerChange = this.handlePowerChange.bind(this);
    // this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handlePowerChange(e) {
    this.setState({
      selectedPower: e.target.value
    });
    // console.log(this.state.selectedPower);
  }
  handleRadioChange(e) {
    this.setState({
      selectedRadio: e.target.value
    });
    console.log(this.state.selectedRadio);
  }
  handleSave() {
    console.log(`${this.state.selectedPower} Power | ${this.state.selectedRadio} Radio`);
  }
  handleCancel() {
    this.setState(prevState => ({
      selectedPower: '4dBm',
      selectedRadio: '2.4Ghz'
      // selectedPower: prevState.selectedPower,
      // selectedRadio: prevState.selectedRadio
    }));
    console.log('cancel');
    console.log(`${this.state.selectedPower} Power | ${this.state.selectedRadio} Radio`);
  }

  // calculateDistance() {
  //   let K = 27.55;
  //   let f = this.state.selectedRadio * 1000;
  //   let FSPL = this.state.selectedPower;
  //   // let log10f = 67.6;
  //   let log10f = 20 * Math.log10(2400);
  //   let d = 10 * (FSPL- K - log10f) / 20;
  //   console.log(log10f);
  // }

  calculateDistance(signalLevelInDb, freqInMHz) {
    let exp = (27.55 - (20 * Math.log10(freqInMHz)) + Math.abs(signalLevelInDb)) / 20;
    console.log(Math.pow(10, exp));
    return Math.pow(10, exp);
  }

  UNSAFE_componentWillMount() {
    this.calculateDistance(80, 2400);
  }

  render() {
    const state = this.state;
    return (
      <div className="CoverageSimulator">
        <AntennaField />
        <Sidebar
          txPower={state.txPower}
          radioOptions={state.radioOptions}
          handlePowerChange={this.handlePowerChange.bind(this)}
          handleRadioChange={this.handleRadioChange.bind(this)}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
          selectedPower={state.selectedPower}
          selectedRadio={state.selectedRadio}
        />
      </div>
    );
  }
}

export default CoverageSimulator;
