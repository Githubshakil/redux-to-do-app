import React from "react";

const ToDoList = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Todo List App</h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="add a todo"
          className="px-4 py-2 border border-gray-300 rounded placeholder:text-gray-400 text-black"
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 ">
          Add
        </button>
      </div>

      <div>
        <ul className="w-full max-w-md">
          <li className="flex justify-start items-center px-4 py-2 border-b space-x-4">
            <span>items 1</span>
            <button className="text-red-500 hover:underline">Remove</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
