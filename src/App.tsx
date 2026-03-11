import type { Movie } from "./types/Movie";
import type { Genre } from "./types/Genre";
import {useEffect, useState} from "react";
import {MovieCard} from "./components/MovieCard";


function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ru-RU`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ru-RU`)
        .then(response => response.json())
        .then(data => setGenres(data.genres))
    }, []);

    return (
        <div>
            <h1>Movie Explorer</h1>
            <ul>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} genres={genres}></MovieCard>
                ))}
            </ul>
        </div>
    );
}

export default App;