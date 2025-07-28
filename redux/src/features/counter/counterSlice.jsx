import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0
  },
  reducers: {
    reset: (state) => {
      state.value=0
    },
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    },
    incrementByAmount:(state, action) => {
      state.value += Number(action.payload)
    }
  }
})

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer