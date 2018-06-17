import React from 'react';
import PropTypes from 'prop-types';
import TxPower from './TxPower/TxPower';
import RadioOptions from './RadioOptions/RadioOptions';
import Button from 'components/Button/Button';

import './Sidebar.css';

const Sidebar = props => {
  return (
    <div className="Sidebar">
      <TxPower
        txPower={props.txPower}
        handlePowerChange={props.handlePowerChange}
        selectedPower={props.selectedPower}
      >
        TX Power
      </TxPower>
      <RadioOptions
        radioOptions={props.radioOptions}
        handleRadioChange={props.handleRadioChange}
        selectedRadio={props.selectedRadio}
      >
        Radio
      </RadioOptions>
      <div className="Sidebar__controls">
        <Button btnType="Button__save" handleSave={props.handleSave}>
          Save
        </Button>
        <Button btnType="Button__cancel" handleCancel={props.handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  txPower: PropTypes.arrayOf(PropTypes.object),
  radioOptions: PropTypes.arrayOf(PropTypes.object),
  handlePowerChange: PropTypes.func,
  handleRadioChange: PropTypes.func,
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,
  selectedPower: PropTypes.string,
  selectedRadio: PropTypes.string
};

export default Sidebar;
