import React from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { ACTIONS } from '../../store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import useMovies from '../../hooks/movies.hook';


const SearchBar = () => {
    const {AllMovies} = useMovies();
    const handleShowSearch = () =>{
        const input = document.querySelector(".search");
        input.classList.toggle("active");
    }
    const handleClearSearch = () =>{
        const search = document.querySelector("#SearchBar");
        search.value = "";
        AllMovies(); 
    }
    const handleSearch = (e) =>{
        dispatch({type: ACTIONS.SEARCH_QUERY, payload:{query: e.target.value}})
        dispatch({type: ACTIONS.SEARCH_MOVIES, payload:{query: e.target.value}})
        !e.target.value && AllMovies();
            
    }
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    return ( 
        <div>
            <div className="search">
                <div className="icon" onClick={handleShowSearch}></div>
                <div className="input"><input type="text" placeholder='Search....' id='SearchBar' 
                onChange={(e) => handleSearch(e)}/></div>
                <span className='clear' onClick={handleClearSearch}></span>
            </div>
        </div>
     );
}
 
export default SearchBar;