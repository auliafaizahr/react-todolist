import React, { Component } from 'react';
import PhotoComponent from './Component/PhotoComponent';
import InfoComponent from './Component/InfoComponent';
import Todo from './Component/Todo';
import './App.scss';
import List from './list';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container-lg full-height vh-100 d-flex justify-content-center align-items-center ">
        <div className="row">
          <div className="card col-auto mx-auto">
            <span>To Do List</span>
            <Todo />
          </div>
        </div>
      </div>
    );
  }
}
