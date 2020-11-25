import React from 'react';

class Bike extends React.Component {
    constructor(props) {  //good practise to pass props through constructor and super
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
          };
    }

    changeColor = () => {
        this.setState({color: "blue"});
      }

    render() {
      return (
    <div>
        <h2>I have a {this.state.color} Bike!</h2>;
        <h2>I have a {this.props.type} Bike!</h2>;
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
      );
    }
  }

  export class Garage extends React.Component {
      
    render() {
        const bikeType = "casual";

      return (
        <div>
        <h1>Who lives in my Garage?</h1>
        <Bike type="sports"/>
        <Bike type={bikeType}/>
        </div>
      );
    }
  }
  