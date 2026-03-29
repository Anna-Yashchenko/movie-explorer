import {useFavoritesStore} from "../../store/useFavoritesStore";
import {MovieList} from "../../components/MovieList";

export const FavoritesPage = () => {
    const {favorites} = useFavoritesStore();
    return (
        <div>
            <h1>Избранное</h1>

            {favorites.length === 0 ? (
                <p>У вас пока нет избранных фильмов</p>
            ) : (
                <MovieList movies={favorites}/>
            )}
        </div>
    )
}
