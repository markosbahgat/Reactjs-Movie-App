import React from 'react';
import MovieCard from '../movie-card/movie-card.componet';

import useMovies from '../../hooks/movies.hook';
import './primary-page.scss';
import { useSelector } from 'react-redux';
import LoadMoreButton from '../load-more-button/load-more-button';

const PrimaryPage = () => {
    useMovies();
    const state = useSelector((state) => state);
    
    return (
        <>
            <div className='main'>
            {state.movies?.map(movie => {
                const props = {
                    poster_path: movie.poster_path,
                    title: movie.original_title,
                    vote_average: movie.vote_average,
                    overview: movie.overview
                }
                return (
                    <MovieCard key={movie.id} {...props}/>
                )})}
            </div>
            <LoadMoreButton/>
        </> 
     );
}
 
export default PrimaryPage;