import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';

export const trafficContext = React.createContext();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
      signalColor: 'red',
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, bool) {
    switch(car) {
      case 'red':
        this.setState({ redCar: bool });
        break;
      case 'blue':
        this.setState({ blueCar: bool });
        break;
      case 'yellow':
        this.setState({ yellowCar: bool });
        break;
      default:
        return true;
    }
  }

  changeSignal(color) {
    this.setState({ signalColor: color });
  }
  render() {
  const contextValue = {...this.state, moveCar: this.moveCar, changeSignal: this.changeSignal}
  return (
    <trafficContext.Provider value={contextValue}>
    <div className="container">
      <Cars />
      <TrafficSignal />
    </div>
    </trafficContext.Provider>
  );
  }
}

export default App;
