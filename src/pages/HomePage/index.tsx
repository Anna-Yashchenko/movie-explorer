import {usePopularMovies} from "../../hooks/usePopularMovies";
import {MovieList} from "../../components/MovieList";
import {useMovieSearch} from "../../hooks/useMovieSearch";
import {useState} from "react";

export const HomePage = () => {
    const [query, setQuery] = useState('');
    const [searched, setSearched] = useState(false);

    const {movies, loading, error} = usePopularMovies();
    const {foundMovies, loading: isSearching, error: searchError, search} = useMovieSearch()

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    if (isSearching) return <p>Поиск фильма...</p>;
    if (searchError) return <p>Ошибка поиска: {searchError}</p>;

    const handleSearch = async () => {
        setSearched(true);
        await search(query)
    }

    return (
        <div>
            <h1>Movie Explorer</h1>
            <input
                type="text"
                placeholder="Введите название фильма"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <button onClick={handleSearch}>Поиск</button>
            {searched ? (
                foundMovies.length > 0 ? (
                    <MovieList movies={foundMovies}/>
                ) : (
                    <p>Такого фильма нет</p>
                )
            ) : (
                <MovieList movies={movies}/>
            )}
        </div>
    );
}
