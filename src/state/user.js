import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

//export const setUser = createAction("SET_USER")

export const sendLoginRequest = createAsyncThunk("LOGIN", ({email, password}) => {
  
  return axios
    .post("http://localhost:3001/api/login", {
      email: email,
      password: password,
    })
    .then((res) => res.data)
    .then((data)=> {
      localStorage.setItem("token", data.token)
      return data.payload
    })
});

export const checkLogin = createAsyncThunk ("CHECK", ()=>{
  return axios.get("api/users/me", {headers:{token:localStorage.getItem("token")}})
  .then(res=>res.data)
})

export const logOutUser = createAction("LOGOUT_USER")


const userReducer = createReducer(null, {
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
  [checkLogin.fulfilled]: (state, action) => action.payload,
  [logOutUser]: (state,action) => null
});

export default userReducer;
