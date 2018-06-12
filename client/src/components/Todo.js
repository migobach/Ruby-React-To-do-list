import React from 'react';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey',
  },
  pointer: { cursor: 'pointer' },
}

const Todo = ({
  id,
  complete,
  name, 
  priority,
  updateItem,
  deleteItem,
}) => (
  <div className="col s12">
    <div className="col s8">
      <div 
        style={ complete ? styles.complete : {} }
        className="center"
      >
        {name}
      </div>
    </div>
    <div className="col s2">
      <input
        id={`item-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={() => updateItem(id)}
      />
      <label htmlFor={`item-${id}`}>Complete?</label>
    </div>
    <div 
      className="col s2"
      style={styles.pointer}
      onClick={() => deleteItem(id)}
    >
      X
    </div>
  </div>
)

export default Todo;
 