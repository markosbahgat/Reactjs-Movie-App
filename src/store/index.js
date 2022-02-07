/*import { createSlice } from "@reduxjs/toolkit";




const movieSlice = createSlice({
    name: "movie",
    initialState:{movies:[], page: 1, search_query:"", showForm: false},
    reducers:{
        SAVE_MOVIES: (state, action) => {
            state.movies = action.payload;
        },
        UPDATE_MOVIES: (state, action) => {},
    }
})
export const movieActions = movieSlice.actions;


*/




























































import { createStore } from "redux";

export const ACTIONS = {
    SAVE_MOVIES: 'save_movies',
    UPDATE_MOVIES: 'update_movies',
    PAGE_INCREAMENT: 'page_increament',
    SEARCH_QUERY:'search_query',
    SEARCH_MOVIES:'search_movies',
    SHOW_FORM:"show_form",
    PAGE_DECREAMENT:"page_decreament",
    PAGE_WITH_PAYLOAD: "page_with_payload"
}


const moviesReducer = (state ={movies:[], page: 1, search_query:"", showForm: false}, action) =>{
    console.log(action.payload);
    switch (action.type) {
        case ACTIONS.SAVE_MOVIES:
            return {...state, movies: [...action.payload.movies]};
        case ACTIONS.UPDATE_MOVIES:
            return {movies:[...state.movies, ...action.payload.movies]};
        case ACTIONS.PAGE_INCREAMENT:
            return {...state, page: state.page + 1};
        case ACTIONS.PAGE_DECREAMENT:
            return {...state, page: state.page - 1};
        case ACTIONS.PAGE_WITH_PAYLOAD:
            return {...state, page: action.payload.page};
        case ACTIONS.SEARCH_QUERY:
            return {...state, search_query: action.payload.query};
        case ACTIONS.SEARCH_MOVIES:
            return {...state, movies:[...state.movies.filter(item => item.title.includes(action.payload.query))]};
        case ACTIONS.SHOW_FORM:
            return {...state, showForm: !state.showForm};
        
            default:
                return state;
            }
        }
       
export const store = createStore(moviesReducer);
