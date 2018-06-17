import React, { Component } from 'react';

import Layout from 'components/Layout/Layout';
import CoverageSimulator from 'containers/CoverageSimulator/CoverageSimulator';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <CoverageSimulator />
        </Layout>
      </div>
    );
  }
}

export default App;
