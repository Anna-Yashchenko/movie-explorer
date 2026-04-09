import { useParams } from "react-router-dom";
import { useMovieDetails } from '../../hooks/useMovieDetails';
import { useFavoritesStore } from "../../store/useFavoritesStore";
import styles from './MoviePage.module.css';

export const MoviePage = () => {
    const { id } = useParams();
    const { movie, error, loading } = useMovieDetails(id);
    const { favorites, toggleFavorite } = useFavoritesStore();

    if (loading) return <p className={styles.loading}>Загрузка...</p>;
    if (error) return <p className={styles.error}>Ошибка: {error}</p>;
    if (!movie) return null;

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        : undefined;

    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    return (
        <div className={styles.container}>
            <div className={styles.poster}>
                <img src={posterUrl} alt={movie.title} />
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <button
                        className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
                        onClick={() => toggleFavorite(movie)}
                        aria-label="В избранное"
                    />
                </div>
                {movie.tagline && <p className={styles.tagline}>«{movie.tagline}»</p>}

                <div className={styles.info}>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Год</span>
                        <span className={styles.value}>{movie.release_date?.slice(0, 4)}</span>
                    </div>
                    <div className={styles.infoItem}>
                        <span className={styles.label}>Рейтинг</span>
                        <span className={styles.value}>⭐ {movie.vote_average}</span>
                    </div>
                    {movie.runtime && (
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Продолжительность</span>
                            <span className={styles.value}>{movie.runtime} мин.</span>
                        </div>
                    )}
                    {movie.budget > 0 && (
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Бюджет</span>
                            <span className={styles.value}>${movie.budget.toLocaleString()}</span>
                        </div>
                    )}
                    {movie.revenue > 0 && (
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Сборы</span>
                            <span className={styles.value}>${movie.revenue.toLocaleString()}</span>
                        </div>
                    )}
                    {movie.homepage && (
                        <div className={styles.infoItem}>
                            <span className={styles.label}>Сайт</span>
                            <span className={styles.value}>
                                <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    Перейти →
                                </a>
                            </span>
                        </div>
                    )}
                </div>

                <div className={styles.overview}>
                    <h3>О фильме</h3>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    );
};