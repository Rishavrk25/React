import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  paste:localStorage.getItem("paste")
  ? JSON.parse(localStorage.getItem("paste"))
  : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state,action) => {
     
    },
    updateToPastes: (state,action) => {
      
    },
    reselAllPastes: (state, action) => {
      
    },
    removeFromPastes: (state,action) => {

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, reselAllPastes ,removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer 