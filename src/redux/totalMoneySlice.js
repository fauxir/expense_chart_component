import  { createSlice } from '@reduxjs/toolkit'

const totMoneySlice = createSlice({
    name: 'totMoney',
    initialState: {
        value: 0
      },

      reducers: {
        update: (state, action) => {
            //state.value = action.payload.value
            state.value += 1
        }
      }
})

export const { update } = totMoneySlice.actions
export default totMoneySlice.reducer;