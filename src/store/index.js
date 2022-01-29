import { createStore } from "redux";

export const ACTIONS = {
    SAVE_MOVIES: 'save_movies',
    UPDATE_MOVIES: 'update_movies',
    PAGE_INCREAMENT: 'page_increament',
    SEARCH_QUERY:'search_query',
    SEARCH_MOVIES:'search_movies',
    SHOW_FORM:"show_form"
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
