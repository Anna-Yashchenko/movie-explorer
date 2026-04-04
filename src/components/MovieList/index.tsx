import { MovieCard } from "../MovieCard";
import type { Movie } from "../../types/Movie";

interface MovieListProps {
    movies: Movie[];
}

export const MovieList = ({ movies}: MovieListProps) => {
    return (
        <ul>
            {movies.map(movie => (
                    <MovieCard movie={movie} key ={movie.id}/>
            ))}
        </ul>
    );
};