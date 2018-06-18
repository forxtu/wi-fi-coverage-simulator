import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';
import AuxWrapper from 'hoc/AuxWrapper';

const Button = props => {
  return (
    <AuxWrapper>
      <button
        className={`Button ${props.btnType}`}
        onClick={
          props.btnType === 'Button__save'
            ? props.handleSave
            : props.handleCancel
        }
      >
        {props.children}
      </button>
    </AuxWrapper>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  btnType: PropTypes.string,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func
};

export default Button;
