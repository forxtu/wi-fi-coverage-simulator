import React, { Component } from 'react';
import { any } from 'prop-types';
import Draggable from 'react-draggable';

import './Antenna.css';

const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
class Antenna extends Component {
  static propTypes = {
    calculatedDistance: any
  };

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
    let getPositionAtCenter = function(element) {
      let data = element.getBoundingClientRect();
      return {
        x: data.left + data.width / 2,
        y: data.top + data.height / 2
      };
    };

    let getDistanceBetweenElements = function(a, b) {
      let aPosition = getPositionAtCenter(a);
      let bPosition = getPositionAtCenter(b);

      return Math.sqrt(
        Math.pow(aPosition.x - bPosition.x, 2) +
          Math.pow(aPosition.y - bPosition.y, 2)
      );
    };

    let clientsItems = document.querySelectorAll('.Clients__item');
    clientsItems = Array.prototype.slice.call(clientsItems);
    clientsItems.map(client => {
      let distance = getDistanceBetweenElements(
        document.querySelector('.Antenna'),
        client
      );

      distance - 44 < this.props.calculatedDistance
        ? (client.style.backgroundColor = '#24B77D')
        : (client.style.backgroundColor = '#FC3516');

      return distance;
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.distanceBetweenClientsAndAccesPoint();
    }, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.calculatedDistance !== prevProps.calculatedDistance) {
      this.distanceBetweenClientsAndAccesPoint();
    }
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
        </div>
      </Draggable>
    );
  }
}

export default Antenna;
