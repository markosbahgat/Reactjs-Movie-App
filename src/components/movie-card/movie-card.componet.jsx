import React from 'react';
import './movie-card.scss';
import cast1 from '../../images/Dwayne_Johnson_2014_(cropped).jpg'
import cast2 from '../../images/images.jpg'
import cast3 from '../../images/Selena_Gomez_-_Walmart_Soundcheck_Concert.jpg'
import cast4 from '../../images/MV5BODA3OTM4ODU0MV5BMl5BanBnXkFtZTgwNjQ5Njg3NjM@._V1_.jpg'


const MovieCard = ({poster_path, title, vote_average, overview}) => {
    
    return (
        <>
            <div className="card" >
                <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" className="movie-img" />
                </div>
                <div className="details">
                    <h2>{title.slice(0,22)}..<br/><small>Directed by bill condon</small></h2>
                    <div className="rating">
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star" aria-hidden="true"></i>
                        <i className="fas fa-star-half" aria-hidden="true"></i>
                        <span>{vote_average}</span>
                    </div>
                    <div className="tags">
                        <span className="drama">Drama</span>
                        <span className="hacking">Hacking</span>
                        <span className="action">Action</span>
                    </div>
                    <div className="info">
                        <p>
                            {overview.slice(0,150)}...
                        </p>
                    </div>
                    <div className="star">
                        <h4>Cast</h4>
                        <ul>
                            <li><img src={cast1} alt="cast1" /></li>
                            <li><img src={cast2} alt="cast2" /></li>
                            <li><img src={cast3} alt="cast3" /></li>
                            <li><img src={cast4} alt="cast4" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default MovieCard;