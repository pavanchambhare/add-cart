import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from './cartSlice'
import { combineReducers } from "@reduxjs/toolkit";
 

const reducer = combineReducers({
    // here we will be adding reducers
  })


const store = configureStore({
    reducer: {
        cart: cartReducer,
      
    }
})


export default store;

