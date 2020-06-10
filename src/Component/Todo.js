import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: [],
      isChecked: false,
      isDisabled: false
    }
  }

  submitList = task => {
    this.setState({ tasks: [...this.state.tasks, task]});
  }

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    console.log(newArr);
    const test =  newArr.splice(index,1);
    // console.log(test);
    this.setState({tasks: newArr});
    console.log(index);
    console.log(this.props);
    // console.log(this.props.tasks);
    // console.log(this.state.tasks);
  }

  handleCheck = (i, e) => {
    this.setState({isChecked: true});
    // if (isChecked) {
    //   this.setState({isDisabled: true});
    // }
    console.log(i.isChecked);
    console.log(e.index);
    // console.log(index);
    // console.log(this.state.tasks[index]);
  }

  handleDisable = (index) => {
    // this.setState({isDisabled: true});
    // this.tasks[index].setState({isDisabled: true});
    console.log(index);
    console.log(this.tasks[index]);
  }

  render(){
    return(
      <div>
        <Input onFormSubmit={ this.submitList }/>
        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} onCheck={this.handleCheck} onDisabled={this.handleDisable} isChecked={this.state.isChecked} isDisabled={this.state.isDisabled} />
      </div>
    );
  }
}

class Input extends Component {
  state = { term: '' };

  submitList = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  }

  render(){
    return(
      <div className="input-form">
        <form onSubmit={this.submitList}>
          <input
          className="input input-todo"
          type="text"
          placeholder="Input Here"
          value={ this.state.term }
          onChange={(e) => this.setState({term: e.target.value})}
          />

          <button type="submit" className="btn btn-add">+</button>
        </form>
      </div>
    );
  }
}

const TodoList = (props) => {
  // console.log(props);
  const todos = props.tasks.map((todo, index) => {
    return <Things content={todo} key={index} id={index} onDelete={props.onDelete} onCheck={props.onCheck} checked={props.isChecked} disabled={props.isDisabled} />
  })

  return(
    <div className="todo-list">
      {todos}
    </div>
  );
}

const Things = (props) => {
  return(
    <div className="box-list row">
      <span className="col-2 checkbox">
        <input
        type="checkbox"
        className="checkbox-light"
        name=""
        id=""
        checked= { props.checked }
        disabled = { props.disabled }
        onChange = {(e) => (props.onCheck({isChecked: e.target.checked}, {index: props.id}))}
          /><label></label>
      </span>
      <div className="list-thing col-7" contentEditable="false">
        {props.content}
      </div>
      <button type="submit" className="btn btn-add" onClick={() => {props.onDelete(props.id)}}>x</button>
    </div>
  );
}

class List extends Component {
  render(){
    return(
      <TodoList />
    );
  }
}


export default Todo;
