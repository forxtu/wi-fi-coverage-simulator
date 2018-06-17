import React from 'react';
import PropTypes from 'prop-types';

import Aux from 'hoc/Aux';

const Layout = props => (
  <Aux>
    <h1>layout</h1>
    {props.children}
  </Aux>
);

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
