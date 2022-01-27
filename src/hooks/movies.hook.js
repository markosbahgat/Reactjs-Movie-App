import { useState, useEffect } from 'react';
import GetMoviesApi from '../api/movies.api.js';

const useMovies = () => {
    const page =  1;
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const AllMovies = async () =>{
        try{
            const res = await GetMoviesApi(page);
            setData(res && res);
        }
        catch(error){
            setError(error);
            console.log(error);
        }

    }
    useEffect(() => {
        AllMovies() ;
     }, [page])

    return{
        data: data || [],   
        AllMovies,
        error,
    }
}
 
export default useMovies;