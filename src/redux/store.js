import  { configureStore } from '@reduxjs/toolkit'
import showReducer from './showSlice'
import totalMoneySlice from './totalMoneySlice'

export default configureStore({
    reducer:{
        show: showReducer, 
        totMoney: totalMoneySlice
    }
})