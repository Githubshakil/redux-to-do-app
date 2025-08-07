import React from 'react'
import ToDoList from './components/ToDoList'
import Prefarences from './components/Prefarences'


const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900'>
    
      <ToDoList/>
    <Prefarences/>
    
    </div>
  )
}

export default App