import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import store from "./state/store"
import "./index.css";




ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
     <Main />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);