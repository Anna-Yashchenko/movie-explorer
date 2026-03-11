import type {Movie} from "../../types/Movie";
import type {Genre} from "../../types/Genre";

interface MovieCardProps {
    movie: Movie;
    genres: Genre[];
}

export const MovieCard =( {movie,genres }: MovieCardProps) => {

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
        : null;

    const year = movie.release_date?.slice(0, 4);

    const genreNames = movie.genre_ids
        .map(id => genres.find(genre => genre.id === id)?.name)
        .filter(Boolean)
        .join(', ');

    return (
        <div>
            <h3>{movie.title}</h3>
            {
                posterUrl && (
                    <img
                        src={posterUrl}
                        alt={movie.title}
                        style={{ width: '200px', borderRadius: '8px' }}
                    />
                )
            }
            {year && <p>Год: {year}</p>}
            {genreNames && <p>Жанры: {genreNames}</p>}
            <p>Рейтинг: {movie.vote_average}</p>
            <h6>{movie.overview}</h6>
        </div>
    );
};