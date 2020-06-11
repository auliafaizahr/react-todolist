import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasks: []
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
  }

  render(){
    return(
      <div>
        <Input onFormSubmit={ this.submitList }/>
        <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
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
  console.log(props);
  const isDisabled = false;
  const isChecked = false;

  const todos = props.tasks.map((todo, index) => {
    return <Things content={todo} key={index} id={index} onDelete={props.onDelete} />
  })

  return(
    <div className="todo-list">
      {todos}
    </div>
  );
}

class Things extends Component {
  constructor(props){
    super(props);

    this.state = {
      isChecked: false,
      isDisabled: false,
      isEditable: true,
      isDeletable: false
    }
  }

  handleCheck = (a, b) => {
    if (!this.state.isChecked) {
      this.setState({isChecked: true});
      this.setState({isDisabled: true});
      this.setState({isEditable: false});
      this.setState({isDeletable: true});
    }

    console.log(b.index);
    console.log(this.state)
  }

  render(){
    return(
      <div className="box-list row">
        <span className="col-2 checkbox">
          <input
          type="checkbox"
          className="checkbox-light"
          name=""
          id= {this.props.id}
          checked= { this.state.isChecked }
          disabled = { this.state.isDisabled }
          onChange = {(e) => (this.handleCheck({isChecked: e.target.checked}, {index: this.props.id}))}
            /><label></label>
        </span>
        <div
          className="list-thing col-7"
          contentEditable={ this.state.isEditable }
          id = { this.props.id }
        >
          {this.props.content}
        </div>
        <button
          type="submit"
          className="btn btn-add"
          disabled={ this.state.isDeletable }
          onClick={() => {this.props.onDelete(this.props.id)}}
          >x</button>
      </div>
    );
  }
}

class List extends Component {
  render(){
    return(
      <TodoList />
    );
  }
}


export default Todo;
