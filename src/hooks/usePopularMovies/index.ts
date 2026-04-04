import { useState, useEffect } from 'react';
import { getGenres, getPopularMovies } from '../../api/tmdb';
import type { Movie } from "../../types/Movie";
import type { Genre } from "../../types/Genre";

export const usePopularMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const {results, totalPages: total} = await getPopularMovies(page);
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
    }, [page]);


    return { movies, loading, error, page, totalPages, setPage };
};