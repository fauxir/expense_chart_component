import  { createSlice } from '@reduxjs/toolkit'

const totMoneySlice = createSlice({
    name: 'totMoney',
    initialState: {
        value: ""
      },

      reducers: {
        update: (state, action) => {
            state.value += action.payload
      }
}})

export const { update } = totMoneySlice.actions
export default totMoneySlice.reducer;