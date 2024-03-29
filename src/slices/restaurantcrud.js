import { createSlice } from '@reduxjs/toolkit'

import {createRestaurants, deleteRestaurant, listRestaurants} from "../thunks/restauranthunk";

const initialState = {
    list:[],
    totalRecords:0,
    addResponse:{}
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
          //state.addResponse={id:action.payload.id}


        }).addCase(createRestaurants.rejected,(state,action)=>{
          //state.addResponse={id:null,error:action.payload}

        }).addCase(createRestaurants.pending,(state,action)=>{
        
            
        }).addCase(listRestaurants.fulfilled,(state,action)=>{
         
          state.list=action.payload.data
          state.totalRecords=action.payload.meta.pagination.total

        }).addCase(deleteRestaurant.fulfilled,(state,action)=>{
          console.log("Deleted");
        })

    }

    

  })

  export default  restaurantSlice.reducer;