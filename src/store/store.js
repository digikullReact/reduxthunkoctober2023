import { configureStore } from '@reduxjs/toolkit'
import restaurantReducer from "../slices/restaurantcrud";
export const store = configureStore({
  reducer: {restaurantReducer},
})