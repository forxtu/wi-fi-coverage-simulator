import React from 'react';
import { node, string, func } from 'prop-types';

import './Button.css';
import AuxWrapper from 'hoc/AuxWrapper';

const Button = props => {
  return (
    <AuxWrapper>
      <button
        className={`Button ${props.btnType}`}
        onClick={
          props.btnType === 'Button__save' ? props.onSave : props.onCancel
        }
      >
        {props.children}
      </button>
    </AuxWrapper>
  );
};

Button.propTypes = {
  children: node,
  btnType: string,
  onSave: func,
  onCancel: func
};

export default Button;
