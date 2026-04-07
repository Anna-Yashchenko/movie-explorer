import { MovieCard } from "../MovieCard";
import type { Movie } from "../../types/Movie";
import styles from './MovieList.module.css';

interface MovieListProps {
    movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
    return (
        <div className={styles.list}>
            {movies.map(movie => (
                <div key={movie.id} className={styles.cardWrapper}>
                        <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
};