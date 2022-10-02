import React, {useEffect, useState} from "react";
import tmdb from '../apis/tmdb.js';
import CardMovies from "../components/CardMovies.jsx";
const MovieCardList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(
        () => {
            const myMoviesData = async () => {
                try {
                    const fetchMovies = await tmdb.get(
                        '/movie/now_playing'
                    );
                    setMovies(fetchMovies.data.results);
                    console.log(fetchMovies.data.results);
                } catch (err) {
                    console.log(err);
                }
            }
            myMoviesData();
        }, []
    );
    return (
        <>
            {movies.map(movie => (
                <>
                    <CardMovies movie={movie} />
                </>
            ))}
        </>
    )


}

export default MovieCardList;