import { useFavoritesStore } from "../../store/useFavoritesStore";
import { MovieList } from "../../components/MovieList";
import styles from './FavoritesPage.module.css';

export const FavoritesPage = () => {
    const { favorites } = useFavoritesStore();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Избранное</h1>

            {favorites.length === 0 ? (
                <p className={styles.empty}>У вас пока нет избранных фильмов</p>
            ) : (
                <MovieList movies={favorites} />
            )}
        </div>
    );
};