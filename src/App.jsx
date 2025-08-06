import React from 'react'
import ToDoList from './components/ToDoList'
import ThemeChange from './components/ThemeChange'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
    <ToDoList/>
    <ThemeChange/>
    </div>
  )
}

export default App