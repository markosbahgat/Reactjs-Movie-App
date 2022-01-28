import { createStore } from "redux";

export const ACTIONS = {
    SAVE_MOVIES: 'save_movies',
    UPDATE_MOVIES: 'update_movies',
    PAGE_INCREAMENT: 'page_increament'
}


const moviesReducer = (state ={movies:[], page: 1}, action) =>{
    switch (action.type) {
        case ACTIONS.SAVE_MOVIES:
            return {...state, ...action.payload.movies};
        case ACTIONS.UPDATE_MOVIES:
            return {movies:[...state.movies, ...action.payload.movies]};
        case ACTIONS.PAGE_INCREAMENT:
            return {...state, page: state.page + 1};
        
            default:
                return state;
            }
        }
       

export const store = createStore(moviesReducer);
