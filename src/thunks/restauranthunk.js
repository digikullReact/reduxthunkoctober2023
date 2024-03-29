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

export const listRestaurants=createAsyncThunk(
    "restaurant/listRestaurants",
    async (page=1) => {
        // We will make api call with axios
       let result= await axios.get(`http://localhost:1337/api/restaurants?pagination[page]=${page}&pagination[pageSize]=5`);
       return result.data;

      },
)

export const deleteRestaurant=createAsyncThunk(
    "restaurant/deleteRestaurants",
    async (id) => {
        // We will make api call with axios
       let result= await axios.delete(`http://localhost:1337/api/restaurants/${id}`);
       return result.data;

      },
)

