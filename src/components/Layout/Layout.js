import React from 'react';
import { node } from 'prop-types';

import AuxWrapper from 'hoc/AuxWrapper';
import './Layout.css';

const Layout = props => (
  <AuxWrapper>
    {/* <div className="Layout">
      <h1>layout</h1>
    </div> */}
    {props.children}
  </AuxWrapper>
);

Layout.propTypes = {
  children: node
};

export default Layout;
