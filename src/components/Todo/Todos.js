import React, { Component } from 'react'
import TodoItem from "./TodoItem";

export default class Todos extends Component {

  changeStatus = (todoItem) => {
    console.log("todoItem == ", todoItem)
  };
  render() {
    const {todos} = this.props;
    return (
      <div className="todo-list">
        {todos.map((todo, i) =>
          <li key={i}>
           <TodoItem
             todo={todo}
             onChange={this.changeStatus}/>
          </li>)
        }
      </div>
    )
  }
}
