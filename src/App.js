import React, {useState} from 'react'
import axios from 'axios'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const url = 'https://5f4933148e271c001650c78d.mockapi.io/todo'

  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    axios.get(url)
      .then(response => setTodos(response.data))           
  }

  const completeTodo = id => {
    const newTodos = [...todos];    
    const task = newTodos.find(task => task.id === id)
    task.isCompleted = task.isCompleted ? false : true;
    let isCompleted = task.isCompleted;
    setTodos(newTodos);
        
    axios.put(`${url}/${id}`, { isCompleted } )
      .then(response => console.log(response))
  };

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);

    axios.post(url, {text})
    .then(response => console.log(response))

    setTimeout(()=>getTodos(), 1000)
  };

  const editTodo = id => {
    const newTodos = [...todos];
    const task = newTodos.find(task => task.id === id)    
    let text = prompt('Edit the task', task.text);
    text === null ? text = task.text : task.text = text;
    setTodos(newTodos);

    axios.put(`${url}/${id}`, {text})
      .then(response => console.log(response))
  }

  const removeTodo = (id, index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}      
            id={todo.id} 
            index={index}     
            todo={todo}
            completeTodo={completeTodo}
            editTodo={editTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm className="todoForm"addTodo={addTodo} />
        <div className="getTodos">
          <button onClick={getTodos}>getTodos</button>
        </div>
        
      </div>
    </div>
  );
}

export default App