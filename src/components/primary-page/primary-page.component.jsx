import React from 'react';
import MovieCard from '../movie-card/movie-card.componet';
import StickyTopNavbar from '../navbar-header/navbar-header.component';
import useMovies from '../../hooks/movies.hook';
import './primary-page.scss';
import { useSelector } from 'react-redux';
import LoadMoreButton from '../load-more-button/load-more-button';

const PrimaryPage = () => {
    const page = useSelector((state) => state.page);
    const {data} = useMovies(page);
    return (
        <>
            <StickyTopNavbar/>
            <div className='main'>
            {data?.map(movie => {
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
            <LoadMoreButton/>
        </> 
     );
}
 
export default PrimaryPage;