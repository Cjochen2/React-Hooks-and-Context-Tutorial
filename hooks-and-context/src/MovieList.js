import React, { useContext } from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieContext'

const MovieList = () => {
    const [movie, setMovie] = useContext(MovieContext)
    return (
        <div>
            {movie.map(movie => (
                <Movie name={movie.name} price={movie.price} />
            ))}
        </div>
    )
};

export default MovieList