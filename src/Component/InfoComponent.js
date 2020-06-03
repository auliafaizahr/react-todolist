import React, { Component } from 'react';

class Button extends Component {
  render(){
    return(
      <div className="btn-class">
        <button className="btn skips">Skips</button>
        <button className="btn get-started">Get Started</button>
      </div>
    );
  }
}

class InfoComponent extends Component {
  render(){
    return(
      <div className="card-body text-center">
        <h4>Read App</h4>
        <p>Designed by designer for Read Lovers</p>
        <Button />
      </div>
    );
  }
}

export default InfoComponent;