import React, { Component } from 'react';

class Input extends Component {
  render(){
    return(
      <div className="input-form">
        <input className="input input-todo" type="text" placeholder="Input Here" />
        <button className="btn btn-add">+</button>
      </div>
    );
  }
}

class List extends Component {
  render(){
    return(
      <div className="todo-list">
        <div className="box-list row">
          <span className="col-2"> <input type="checkbox" className="checkbox-light" name="" id=""/> </span>
          <div className="list-thing col-7" contentEditable="true">
            a
          </div>
        </div>
      </div>
    );
  }
}

class Todo extends Component {
  render(){
    return(
      <div>
        <Input />
        <List />
      </div>
    );
  }
}

export default Todo;
