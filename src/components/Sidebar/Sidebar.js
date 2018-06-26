import React from 'react';
import { arrayOf, object, func, any } from 'prop-types';
import TxPower from './TxPower/TxPower';
import RadioOptions from './RadioOptions/RadioOptions';
import Button from 'components/Button/Button';

import './Sidebar.css';

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <TxPower
        txPower={props.txPower}
        onPowerChange={props.onPowerChange}
        selectedPower={props.selectedPower}
      >
        TX Power
      </TxPower>
      <RadioOptions
        radioOptions={props.radioOptions}
        onRadioChange={props.onRadioChange}
        selectedRadio={props.selectedRadio}
      >
        Radio
      </RadioOptions>
      <div className="Sidebar__controls">
        <Button btnType="Button__save" onSave={props.onSave}>
          Save
        </Button>
        <Button btnType="Button__cancel" onCancel={props.onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  txPower: arrayOf(object),
  radioOptions: arrayOf(object),
  onPowerChange: func,
  onRadioChange: func,
  onSave: func,
  onCancel: func,
  selectedPower: any,
  selectedRadio: any
};

export default Sidebar;
