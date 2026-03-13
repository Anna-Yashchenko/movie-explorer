import { MovieCard } from "../MovieCard";
import type { Movie } from "../../types/Movie";
import type { Genre } from "../../types/Genre";
import {Link} from "react-router-dom";

interface MovieListProps {
    movies: Movie[];
    genres: Genre[];
}

export const MovieList = ({ movies, genres }: MovieListProps) => {
    return (
        <ul>
            {movies.map(movie => (
                <Link to={`/movie/${movie.id}`}>
                    <MovieCard key={movie.id} movie={movie} genres={genres} />
                </Link>
            ))}
        </ul>
    );
};