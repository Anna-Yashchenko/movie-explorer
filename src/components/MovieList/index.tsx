import { MovieCard } from "../MovieCard";
import styles from './MovieList.module.css';
import type {Movie} from "../../types";

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