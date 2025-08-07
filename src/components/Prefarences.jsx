import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../redux/features/prefarences/prefarenceSlice'

const Prefarences = () => {
  const darkMode = useSelector((state)=>state.prefarences.darkMode)
  const dispatch = useDispatch()




  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  },[darkMode])
  


  return (
    <div className='flex mt-12 flex-col items-center space-y-4'>
        <h2 className='text-xl font-bold'>Preferances</h2>
        <p>Dark Mode : {darkMode ? "Enabled" : "Disabled"}</p>
        <button
        onClick={()=>dispatch(toggleDarkMode())}
        className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-800 cursor-pointer'>Toggle Dark Mode </button>
    </div>
  )
}

export default Prefarences