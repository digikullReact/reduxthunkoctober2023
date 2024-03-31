import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./store/store";
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Restaurant from './components/Restaurant';
import List from './components/List';
import Parent from './components/Memoization/Parent';
import UseMem from './components/Memoization/UseMem';
import Home from './components/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
    children:[
      {
        path: "create",
        element:<Restaurant/> ,
      },
      {
        path: "list",
        element:<List/> ,
      }

    ]
  },   

  {
    path:"/parent",
    element:<Parent/>
  }
  ,{
    path:"/usememo",
    element:<UseMem/>
  },
  ,{
    path:"/home",
    element:<Home/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>,
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
