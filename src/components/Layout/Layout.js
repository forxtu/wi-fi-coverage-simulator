import React from 'react';
import PropTypes from 'prop-types';

import Aux from 'hoc/Aux';
import './Layout.css';

const Layout = props => (
  <Aux>
    {/* <div className="Layout">
      <h1>layout</h1>
    </div> */}
    {props.children}
  </Aux>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
