import React from 'react';

const CardMovies = ({ movie }) => {
    const baseURL = 'https://image.tmdb.org/t/p/w200';
    return (
        <>
            <div>{movie.title}</div>
            <img src={`${baseURL}${movie.poster_path}`} />
        </>
    );
}

export default CardMovies;