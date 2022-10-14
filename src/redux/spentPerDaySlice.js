import  { createSlice } from '@reduxjs/toolkit'

const spentPerDaySlice = createSlice({
    name: 'moneySpent',
    initialState: {
        value: ""
      },

      reducers: {
        update: (state, action) => {
            state.value += action.payload
      }
}})

export const { update } = spentPerDaySlice.actions
export default spentPerDaySlice.reducer;