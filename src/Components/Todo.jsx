import React, { useState } from 'react';

function Todo(props) {
  const [todo, setTodo] = useState([]);
  const [todoItem, setTodoItem] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (todoItem.trim() !== '') {
      setTodo([...todo, todoItem]);
      setTodoItem('');
    }
  };

  return (
    <div>
      <div>
        <h1 className='text-2xl bg-green-500 text-center mt-10'>Project{props.number} Todo List</h1>
        <form className='mt-5 md:w-96 justify-center mx-auto'>
          <label
            htmlFor="Add"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          ></label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="todoItem"
              value={todoItem}
              onChange={(e) => setTodoItem(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add your Todo"
              required=""
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={addTodo}
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
      <ul className='text-center mt-10'>
        {todo.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
