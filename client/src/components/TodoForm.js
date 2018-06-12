import React from 'react';

class TodoForm extends React.Component {
  state = { todoName: '', priority: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault() 
    const { todoName, priority } = this.state
    this.props.addItem( todoName, priority )
    this.setState({ todoName: '', priority: '' })
  }

  render() {
    const { todoName, priority } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="todoName"
          placeholder="Add A Todo"
          required
          value={todoName}
          onChange={this.handleChange}
        />
        <input
          placeholder="Add A priority"
          value={priority}
          name="priority"
          onChange={this.handleChange}
        />
        <button className="btn">Submit</button>
      </form>
    )
  }
}

export default TodoForm;