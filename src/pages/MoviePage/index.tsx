import {useParams} from "react-router-dom";
import {useMovieDetails} from '../../hooks/useMovieDetails';
import {MovieCard} from "../../components/MovieCard";

export const MoviePage = () => {
    const { id } = useParams();
    const {movie, error, loading} = useMovieDetails(id)

    if (loading) return <p> Загрузка...</p>
    if (error) return <p> Ошибка: {error}</p>
    if (!movie) return null
    return (
        <div>
            <MovieCard movie={movie}/>
            {movie.tagline && <p>Слоган:{movie.tagline}</p>}
            {movie.runtime && <p>Продолжительность:{movie.runtime} мин.</p>}
            {movie.budget > 0 && <p>Бюджет:${movie.budget.toLocaleString()}</p>}
            {movie.revenue > 0 && <p>Сборы:${movie.revenue.toLocaleString()}</p>}
            {movie.homepage && <p>Официальный сайт:<a href={movie.homepage} target="_blank">Перейти</a></p>}
        </div>


    )

}

