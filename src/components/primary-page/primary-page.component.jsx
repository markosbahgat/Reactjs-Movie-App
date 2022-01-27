import React from 'react';
import MovieCard from '../movie-card/movie-card.componet';
import StickyTopNavbar from '../navbar-header/navbar-header.component';
import useMovies from '../../hooks/movies.hook';
import './primary-page.scss';


const PrimaryPage = () => {
    const {data} = useMovies();
    return (
        <>
            <StickyTopNavbar/>
            <div className='main'>
            {data.results?.map(movie => {
                const props = {
                    poster_path: movie.poster_path,
                    title: movie.title,
                    vote_average: movie.vote_average,
                    overview: movie.overview
                }
                return (
                    <MovieCard key={movie.id} {...props}/>
                )})}
            </div>
        </> 
     );
}
 
export default PrimaryPage;