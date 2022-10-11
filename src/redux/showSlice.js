import  { createSlice } from '@reduxjs/toolkit'

const showSlice = createSlice({
    name: 'show',
    initialState: {
        value: 0
      },

      reducers: {
        appear: state => {
            state.value += 1
        },
        disapear: state => {
            state.value -= 1
        }
      }
})

export const { appear, disapear} = showSlice.actions
export default showSlice.reducer;