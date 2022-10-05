import { createAction, createReducer } from "@reduxjs/toolkit"; 

export const setMovies = createAction("SET_MOVIES")

const moviesReducer = createReducer([], {
    [setMovies]: (state,action) => action.payload
})

export default moviesReducer;