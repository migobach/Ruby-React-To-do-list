import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    fetch('/api/items')
      .then( res => res.json() )
      .then( todos => this.setState({ todos }) )
  }

  addItem = (name, priority) => {
    const item = { name, priority }
    fetch('/api/items', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      },
      body: JSON.stringify(item)
    }).then( res => res.json() )
      .then( todo => {
        const { todos } = this.state
        this.setState({ todos: [...todos, todo] })
      })
  }

  updateItem = (id) => {
    const todos = this.state.todos.map( t => {
      if (t.id === id)
        return {...t, complete: !t.complete}
      return t 
    })

    this.setState({ todos })
  }

  deleteItem = (id) => {
    const { todos } = this.state
    this.setState({ todos: todos.filter( t => t.id !== id ) })
  }

  render() {
    return (
      <div className="container">
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
