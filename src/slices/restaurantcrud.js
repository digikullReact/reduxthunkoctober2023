import { createSlice } from '@reduxjs/toolkit'

import {createRestaurants} from "../thunks/restauranthunk";

const initialState = {
    list:[]
  }

  export const restaurantSlice = createSlice({
    "name":"restarurantSlice",
    initialState,
    reducers:{
        // if you have some static configurations you can configure in the reducers

    },
    extraReducers:(builder)=>{
        // if you have some api operations you can comfigure in extraReducers

        builder.addCase(createRestaurants.fulfilled,(state,action)=>{
          debugger;


        }).addCase(createRestaurants.rejected,(state,action)=>{
          debugger;

        }).addCase(createRestaurants.pending,(state,action)=>{
          debugger;
            
        })

    }

    

  })

  export default  restaurantSlice.reducer;