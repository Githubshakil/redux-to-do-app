import { createSlice } from '@reduxjs/toolkit'



const initialState ={
    darkMode : false
}
const prefarenceSlice = createSlice({
    name: 'prefarence',
    initialState,
    reducers:{
        toggleDarkMode:(state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const {toggleDarkMode} = prefarenceSlice.actions
export default prefarenceSlice.reducer