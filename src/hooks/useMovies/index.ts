import { useState, useEffect } from 'react';
import { getGenres, getFilteredMovies } from '../../api/tmdb';
import type { Movie } from "../../types/Movie";
import type { Genre } from "../../types/Genre";

export const useMovies = (filters?: { genreId?: number; year?: number; rating?: number }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setPage(1)
    }, [filters?.genreId, filters?.rating, filters?.year]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {results, totalPages: total} = await getFilteredMovies(
                    page,
                    filters?.genreId,
                    filters?.year,
                    filters?.rating
                );
                const genresResponse = await getGenres();

                const moviesWithGenres = results.map((movie: Movie) => ({
                    ...movie,
                    genres: movie.genre_ids?.map((id: number) => {
                        const genre = genresResponse.find((g: Genre) => g.id === id);
                        return { id, name: genre?.name || 'неизвестно' };
                    }) || []
                }));

                setMovies(moviesWithGenres);
                setTotalPages(total);

            } catch (error) {
                setError(error instanceof Error ? error.message : 'Произошла ошибка');
            } finally {
                setLoading(false);
            }
        };

        fetchData().catch(console.error);
    }, [page, filters?.genreId, filters?.year, filters?.rating]);


    return { movies, loading, error, page, totalPages, setPage };
};