import { createAction, createReducer } from "@reduxjs/toolkit"; 

export const setSingleMovie = createAction("SET_SINGLEMOVIES")

const singleMovieReducer = createReducer({}, {
    [setSingleMovie]: (state,action) => action.payload
})

export default singleMovieReducer;