import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends Component {
  state = { todos: [
    {id: 1, name: 'buy milk', priority: 'low', complete: false },
    {id: 2, name: 'buy cheese', priority: 'low', complete: true},
  ] }

  componenetDidMount() {

  }

  addItem = (name, priority = 'low') => {

  }

  updateItem = (id) => {

  }

  deleteItem = (id) => {

  }

  render() {
    return (
      <div class="container">
        <TodoForm addItem={this.addItem} />
        <TodoList 
          updateItem={this.updateItem}
          deleteItem={this.deleteItem}
          items={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
