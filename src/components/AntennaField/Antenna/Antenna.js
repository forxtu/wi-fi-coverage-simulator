import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import './Antenna.css';

const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
// const {deltaPosition} = this.state;
class Antenna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // AntennaAreaWidth: `border: ${this.props.calculatedDistance}px solid #d2d8e0`
      deltaPosition: {
        x: 0,
        y: 0
      }
    };
    this.AntennaArea = {
      border: `${this.props.calculatedDistance}px solid #d2d8e0`
    };

    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDrag(e, ui) {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  }

  render() {
    return (
      <Draggable bounds="parent" onDrag={this.handleDrag} {...dragHandlers}>
        <div className="Antenna">
        <div>x: {this.state.deltaPosition.x.toFixed(0)}, y: {this.state.deltaPosition.y.toFixed(0)}</div>
          <div className="Antenna__item" style={this.AntennaArea}>
            <div className="Antenna__item-point" />
          </div>
        </div>
      </Draggable>
    );
  }
}

Antenna.propTypes = {
  children: PropTypes.node,
  calculatedDistance: PropTypes.any
};

export default Antenna;
