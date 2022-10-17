import  { configureStore } from '@reduxjs/toolkit'
import showReducer from './showSlice'
import totalMoneySlice from './totalMoneySlice'
import spentPerDaySlice from './spentPerDaySlice'

export default configureStore({
    reducer:{
        show: showReducer, 
        totMoney: totalMoneySlice,
        moneySpent: spentPerDaySlice
    }
})