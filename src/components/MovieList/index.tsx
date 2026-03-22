import { MovieCard } from "../MovieCard";
import type { Movie } from "../../types/Movie";
import {Link} from "react-router-dom";

interface MovieListProps {
    movies: Movie[];
}

export const MovieList = ({ movies}: MovieListProps) => {
    return (
        <ul>
            {movies.map(movie => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <MovieCard movie={movie}/>
                </Link>
            ))}
        </ul>
    );
};