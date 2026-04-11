import { useMovies } from "../../hooks/useMovies";
import { MovieList } from "../../components/MovieList";
import { useMovieSearch } from "../../hooks/useMovieSearch";
import { SearchBar } from "../../components/SearchBar";
import { Pagination } from "../../components/Pagination";
import { useGenres } from "../../hooks/useGenres";
import { Filters } from "../../components/Filters";
import { useState } from "react";
import styles from './HomePage.module.css';

export const HomePage = () => {
    const [query, setQuery] = useState('');
    const [searched, setSearched] = useState(false);

    const [selectedGenreId, setSelectedGenreId] = useState<number | undefined>(undefined);
    const [selectedYear, setSelectedYear] = useState<number | undefined>(undefined);
    const [selectedRating, setSelectedRating] = useState<number | undefined>(undefined);

    const { movies, loading, error, page, totalPages, setPage } = useMovies({
        genreId: selectedGenreId,
        year: selectedYear,
        rating: selectedRating,
    });

    const { foundMovies, loading: isSearching, error: searchError, search } = useMovieSearch();
    const { genres } = useGenres();

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;
    if (isSearching) return <p>Поиск фильма...</p>;
    if (searchError) return <p>Ошибка поиска: {searchError}</p>;

    const handleSearch = async () => {
        setSearched(true);
        await search(query);
        setQuery('');
    };

    return (
        <div>
            <div className={styles.controls}>
                <SearchBar
                    query={query}
                    onQueryChange={setQuery}
                    onSearch={handleSearch}
                />

                <Filters
                    genres={genres}
                    selectedGenreId={selectedGenreId}
                    onGenreChange={setSelectedGenreId}
                    selectedYear={selectedYear}
                    onYearChange={setSelectedYear}
                    selectedRating={selectedRating}
                    onRatingChange={setSelectedRating}
                />
            </div>

            {searched ? (
                foundMovies.length > 0 ? (
                    <MovieList movies={foundMovies} />
                ) : (
                    <div className={styles.emptyState}>
                        <img src="/sad.png" alt="Not found" className={styles.emptyImage} />
                        <p className={styles.emptyTitle}>Упс!</p>
                        <p className={styles.emptyText}>Мы не нашли фильм</p>
                        <button
                            className={styles.resetButton}
                            onClick={() => {
                                setSearched(false);
                                setQuery('');
                            }}
                        >
                            На главную
                        </button>
                    </div>
                )
            ) : (
                <>
                    <MovieList movies={movies} />
                    {totalPages > 1 && (
                        <Pagination page={page} totalPages={totalPages} setPage={setPage} />
                    )}
                </>
            )}
        </div>
    );
};