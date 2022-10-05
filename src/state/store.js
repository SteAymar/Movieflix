import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies";
import singleMovieReducer from "./singlemovie";
import userReducer from "./user";

const store = configureStore({
    reducer:{
        movies:moviesReducer,
        single:singleMovieReducer,
        user:userReducer
    }
})

export default store;