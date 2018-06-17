import React, { Component } from 'react';

import Sidebar from 'components/Sidebar/Sidebar';
import AntenaField from 'components/AntenaField/AntenaField';
import './CoverageSimulator.css';

class CoverageSimulator extends Component {
  constructor() {
    super();
    this.state = {
      selectedPower: '4dBm',
      selectedRadio: '2.4GHz',
      txPower: [
        {
          type: 'low',
          power: '4dBm'
        },
        {
          type: 'medium',
          power: '6dBm'
        },
        {
          type: 'high',
          power: '16dBm'
        }
        // '4dBm', '6dBm', '16dBm'
      ],
      radioOptions: [
        {
          type: 'low',
          power: '2.4GHz'
        },
        {
          type: 'high',
          power: '5GHz'
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

  render() {
    const state = this.state;
    return (
      <div className="CoverageSimulator">
        <AntenaField />
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
