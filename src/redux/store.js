import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/features/todos/todoSlice'
import prefarenceSlice from '../redux/features/prefarences/prefarenceSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
   prefarences:prefarenceSlice
  }
})
export default store