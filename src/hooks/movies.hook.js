import { useState, useEffect } from 'react';
import GetMoviesApi from '../api/movies.api.js';


const useMovies = (page) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const AllMovies = async () =>{
        try{
            const res = await GetMoviesApi(page);
            const allData = await res.results;
            
            if(data){
                allData.map(item => {
                    setData(data => [...data, item]);
                })
            }else{
                setData(allData);
            }
        }
        catch(error){
            setError(error);
            console.log(error);
        }

    }
    useEffect(() => {
        AllMovies();
     }, [page])

    return{
        data,  
        AllMovies,
        error,
    }
}
 
export default useMovies;