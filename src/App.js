import React, { createContext } from 'react';
import './App.css';
import Cars from './Cars';

export const CarContext = createContext();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar (color, bool) {
    switch(color) {
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
        return console.log('Cor não é válida');
    }
  }

  render() {
  const carObject = { ...this.state, moveCar: this.moveCar };
  return (
    <CarContext.Provider value={ carObject }>
      <Cars />
    </CarContext.Provider>
  );
  }
}

export default App;
