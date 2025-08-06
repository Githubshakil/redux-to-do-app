import React from 'react'

const ThemeChange = () => {
  return (
    <div className='flex mt-12 flex-col items-center space-y-4'>
        <h2 className='text-xl font-bold'>Preferances</h2>
        <p>Dark Mode : Disable/Enable</p>
        <button className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 cursor-pointer'>Toggle Dark Mode </button>
    </div>
  )
}

export default ThemeChange