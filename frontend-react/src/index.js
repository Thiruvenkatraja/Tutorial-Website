import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from'react-redux';
import UserReducer from './Redux/UserSlice';
import CourseReducer from './Redux/CourseSlice';


const store = configureStore({
  reducer:{
    user:UserReducer,
    course:CourseReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

