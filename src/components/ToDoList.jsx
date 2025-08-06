import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../redux/features/todos/todoSlice";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  

  const handleAddTask = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  // const handleRemoveTodo =()=>{

  // }
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Todo List App</h2>
      <div className="flex space-x-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="add a todo"
          className="px-4 py-2 border border-gray-300 rounded placeholder:text-gray-400 text-black"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer "
        >
          Add
        </button>
      </div>

      <div>
        <ul className="w-full max-w-md">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex justify-start items-center px-4 py-2 border-b space-x-4 cursor-pointer `}
              >
                <span onClick={()=> dispatch(toggleTodo(todo.id))} className={`${todo.completed ? 'line-through text-gray-500 cursor-pointer': ''}`}>{todo.text}</span>
                <button onClick={()=>dispatch(removeTodo(todo.id))} className="text-red-500 hover:underline cursor-pointer">Remove</button>
              </li>
            ))
          ) : (
            <li>no task found</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
