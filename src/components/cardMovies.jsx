import React from 'react';

const cardMovies = ({ movie }) => {
    return (
        <>
            <div>{movie.name}</div>
            <div>{movie.image}</div>
            <div></div>
        </>
    );
}