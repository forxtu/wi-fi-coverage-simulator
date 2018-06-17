import React, { Component } from 'react';

import Layout from 'components/Layout/Layout';
import Sidebar from 'components/Sidebar/Sidebar';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      txPower: '4dBm',
      radioOptions: ['2.4GHz', '5GHz']
    };
  }
  // handleChangePower() {

  // }

  render() {
    const state = this.state;
    return (
      <div className="App">
        <Layout>
          <Sidebar txPower={state.txPower} radioOptions={state.radioOptions}>
            child
          </Sidebar>
        </Layout>
      </div>
    );
  }
}

export default App;
