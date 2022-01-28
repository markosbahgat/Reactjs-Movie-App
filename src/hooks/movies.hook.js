import { useState, useEffect } from 'react';
import GetMoviesApi from '../api/movies.api.js';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../store/index.js';

const useMovies = () => {
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
     }, [state.page])

    return{ 
        AllMovies,
        error,
    }
}
 
export default useMovies;