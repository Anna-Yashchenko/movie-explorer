import type { Movie } from "../../types/Movie";
import { useFavoritesStore } from "../../store/useFavoritesStore";
import { Link } from "react-router-dom";
import styles from './MovieCard.module.css';

interface MovieCardProps {
    movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    const { favorites, toggleFavorite } = useFavoritesStore();

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        : undefined;

    const year = movie.release_date?.slice(0, 4);
    const genreNames = movie.genres?.map(genre => genre.name).join(', ') || '';
    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    return (
        <div className={styles.card}>
            <Link to={`/movie/${movie.id}`}>
                <img className={styles.poster} src={posterUrl} alt={movie.title} />
            </Link>
            <div className={styles.footer}>
                <div className={styles.header}>
                    <Link to={`/movie/${movie.id}`} className={styles.titleLink}>
                        <h3 className={styles.title}>{movie.title}</h3>
                    </Link>
                    <button
                        className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
                        onClick={() => toggleFavorite(movie)}
                    />
                </div>

                <div className={styles.info}>
                    {year && <span className={styles.year}>{year}</span>}
                    <span className={styles.rating}>⭐ {movie.vote_average}</span>
                </div>

                {genreNames && <div className={styles.genres}>🎬 {genreNames}</div>}
            </div>
        </div>
    );
};