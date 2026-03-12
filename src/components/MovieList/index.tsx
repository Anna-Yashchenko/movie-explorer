import { MovieCard } from "../MovieCard";
import type { Movie } from "../../types/Movie";
import type { Genre } from "../../types/Genre";

interface MovieListProps {
    movies: Movie[];
    genres: Genre[];
}

export const MovieList = ({ movies, genres }: MovieListProps) => {
    return (
        <ul>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} genres={genres} />
            ))}
        </ul>
    );
};