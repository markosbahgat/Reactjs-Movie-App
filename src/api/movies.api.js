import axios from 'axios';

const GetMoviesApi = async (page) => {
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=12534cc168a46c6bea58ae033e21d151&language=en-US&page=${page}`);
        const data = await res.data;
        return data;
    }catch (error){
        throw error;
    }
}
 
export default GetMoviesApi;