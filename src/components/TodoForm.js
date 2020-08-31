import React, {useState} from 'react'

function TodoForm({addTodo}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };

    return(
        <form onSubmit={handleSubmit} className="todoForm">
          <div className='label'>
            <label>Type task below and press 'Enter':</label>
          </div>
          
          <input
            type="text"            
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </form>
      );
}

export default TodoForm