import type {Movie} from "../../types/Movie";
import {useFavoritesStore} from "../../store/useFavoritesStore";
import {Link} from "react-router-dom";

interface MovieCardProps {
    movie: Movie;
}

export const MovieCard = ({movie}: MovieCardProps) => {
    const {favorites, toggleFavorite} = useFavoritesStore();

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        : null;

    const year = movie.release_date?.slice(0, 4);

    const genreNames = movie.genres?.map(genre => genre.name).join(', ') || '';

    const isFavorite = favorites.some((fav) => fav.id === movie.id);


    return (
        <div>
            <Link to={`/movie/${movie.id}`}>
                <h3>{movie.title}</h3>
            </Link>
            <button onClick={() => toggleFavorite(movie)}>
                {isFavorite ? 'В избранном' : 'В избранное'}
            </button>
            {
                posterUrl && (
                    <img
                        src={posterUrl}
                        alt={movie.title}
                        style={{width: '200px', borderRadius: '8px'}}
                    />
                )
            }
            {year && <p>Год: {year}</p>}
            <p>Рейтинг: {movie.vote_average}</p>
            {genreNames && <p>Жанры: {genreNames}</p>}
            <h6>{movie.overview}</h6>
        </div>
    );
};