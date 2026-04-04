import {usePopularMovies} from "../../hooks/usePopularMovies";
import {MovieList} from "../../components/MovieList";
import {useMovieSearch} from "../../hooks/useMovieSearch";
import {useState} from "react";

export const HomePage = () => {
    const [query, setQuery] = useState('');
    const [searched, setSearched] = useState(false);

    const {movies, loading, error, page, totalPages, setPage} = usePopularMovies();
    const {foundMovies, loading: isSearching, error: searchError, search} = useMovieSearch();

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    if (isSearching) return <p>Поиск фильма...</p>;
    if (searchError) return <p>Ошибка поиска: {searchError}</p>;

    const handleSearch = async () => {
        setSearched(true);
        await search(query);
    };

    const maxVisible = 3;
    let startPage = Math.max(1, page - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisible + 1);
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
                <>
                    <MovieList movies={movies}/>
                    {totalPages > 1 && (
                        <div>
                            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                                &lt;
                            </button>

                            {Array.from({length: endPage - startPage + 1}, (_, i) => startPage + i).map(pageNum => (
                                <button
                                    key={pageNum}
                                    onClick={() => setPage(pageNum)}
                                    disabled={pageNum === page}
                                >
                                    {pageNum}
                                </button>
                            ))}

                            <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                                &gt;
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};