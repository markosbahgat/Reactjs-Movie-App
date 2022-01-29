import { useState, useEffect } from 'react';
import GetMoviesApi from '../api/movies.api.js';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../store/index.js';
import { useNavigate, useLocation } from "react-router-dom";

const useMovies = () => {
    let navigate = useNavigate();
    let history = useLocation();
    const [path, setPath] = useState(history.pathname);
    console.log(history.pathname)
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    
    const AllMovies = async () =>{
        try{
            const res = await GetMoviesApi(state.page);
            const allData = await res.results;
            dispatch({type: ACTIONS.SAVE_MOVIES, payload:{movies: allData}})
            
        }
        catch(error){
            setError(error);
            console.log(error);
        }
        
    }
    useEffect(() => {
        AllMovies();
        if(localStorage.getItem("token")){
            navigate("/", { replace: true });
            console.log("fuck")
        }
        else{
            navigate("/registration", { replace: true });
        }
    }, [state.page, localStorage])
    
    return{ 
        AllMovies,
        error,
    }
}

export default useMovies;