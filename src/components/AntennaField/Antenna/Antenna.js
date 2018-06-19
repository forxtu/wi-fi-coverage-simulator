import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

import './Antenna.css';

const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
// const {deltaPosition} = this.state;
class Antenna extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deltaPosition: {
        x: 0,
        y: 0
      }
    };

    this.antennaRef = React.createRef();

    this.handleDrag = this.handleDrag.bind(this);

    this.distanceBetweenClientsAndAccesPoint = this.distanceBetweenClientsAndAccesPoint.bind(
      this
    );
  }

  handleDrag(e, ui) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
    this.distanceBetweenClientsAndAccesPoint();
  }

  distanceBetweenClientsAndAccesPoint() {
    var getPositionAtCenter = function(element) {
      var data = element.getBoundingClientRect();
      return {
        x: data.left + data.width / 2,
        y: data.top + data.height / 2
      };
    };

    var getDistanceBetweenElements = function(a, b) {
      var aPosition = getPositionAtCenter(a);
      var bPosition = getPositionAtCenter(b);

      return Math.sqrt(
        Math.pow(aPosition.x - bPosition.x, 2) +
          Math.pow(aPosition.y - bPosition.y, 2)
      );
    };

    var distance = getDistanceBetweenElements(
      document.querySelector('.Antenna'),
      document.querySelector('.Clients__item')
    );

    if (distance - 44 < this.props.calculatedDistance) {
      this.props.activateClientAccess();
    } else {
      this.props.disableClientAccess();
    }
    // console.log(this.props.calculatedDistance);
    // console.log(distance);

    return distance;
  }

  componentDidMount() {
    this.distanceBetweenClientsAndAccesPoint();
  }

  render() {
    return (
      <Draggable
        handle=".Antenna__item"
        bounds="parent"
        onDrag={this.handleDrag}
        {...dragHandlers}
      >
        <div className="Antenna" ref={this.antennaRef}>
          <div
            className="Antenna__item"
            style={{
              border: `${this.props.calculatedDistance}px solid #d2d8e0`
            }}
          >
            <div className="Antenna__item-point" />
          </div>
          {/* x: {this.state.deltaPosition.x.toFixed(0)}, y:{' '}
          {this.state.deltaPosition.y.toFixed(0)} */}
        </div>
      </Draggable>
    );
  }
}

Antenna.propTypes = {
  children: PropTypes.node,
  calculatedDistance: PropTypes.any,
  toggleClientAccess: PropTypes.func
};

export default Antenna;
