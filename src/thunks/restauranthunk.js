import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// here you have to configure the api calls to be made to server

export const createRestaurants=createAsyncThunk(
    "restaurant/createRestaurants",
    async (data) => {
        // We will make api call with axios
       let result= await axios.post("http://localhost:1337/api/restaurants",{data});
       return result.data;

      },
)

