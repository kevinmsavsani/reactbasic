import React from 'react';

export class Football extends React.Component {
    shoot = (a, b) => {
      alert(b.type);
      /*
      'b' represents the React event that triggered the function,
      in this case the 'click' event
      */
    }
    render() {
      return (
        <button onClick={(ev) => this.shoot("Goal", ev)}>Take the shot!</button>
      );
    }
  }
  
  

  export class FootballTrial extends React.Component {
    shoot = () => {
      alert(this);
      /*
      The 'this' keyword refers to the component object
      */
    }
    render() {
      return (
        <button onClick={this.shoot}>Take the shot!</button>
      );
    }
  }

  export class FootballTest extends React.Component {
    constructor(props) {
      super(props)
      this.shoot = this.shoot.bind(this)
    }
    shoot() {
      alert(this);
      /*
      Thanks to the binding in the constructor function,
      the 'this' keyword now refers to the component object
      */
    }
    render() {
      return (
        <button onClick={this.shoot}>Take the shot!</button>
      );
    }
  }
  