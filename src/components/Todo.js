import React from 'react'

function Todo({ todo, id, index, completeTodo, editTodo,removeTodo }) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
  
        <div>
          <button onClick={() => completeTodo(id)}>Complete</button>
          <button onClick={() => editTodo(id)}>Edit</button>
          <button onClick={() => removeTodo(id, index)}>x</button>
        </div>
      </div>
    );
  }

export default Todo