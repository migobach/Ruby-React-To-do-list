import React from 'react';
import Todo from './Todo';

const TodoList = ({ items, updateItem, deleteItem }) => (
  <div className="row">
    { items.map( item => { 
      return <Todo
        key={item.id}
        updateItem={updateItem}
        deleteItem={deleteItem}
        {...item}
        />
      }) 
    }
  </div>
)

export default TodoList