import { useState, useEffect } from 'react';
import { getGenres, getPopularMovies } from '../../api/tmdb';
import type { Movie } from "../../types/Movie";
import type { Genre } from "../../types/Genre";

export const usePopularMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const moviesResponse = await getPopularMovies();
                const genresResponse = await getGenres();

                const moviesWithGenres = moviesResponse.map((movie: Movie) => ({
                    ...movie,
                    genres: movie.genre_ids?.map((id: number) => {
                        const genre = genresResponse.find((g: Genre) => g.id === id);
                        return { id, name: genre?.name || 'неизвестно' };
                    }) || []
                }));

                setMovies(moviesWithGenres);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Произошла ошибка');
            } finally {
                setLoading(false);
            }
        };
        fetchData().catch(console.error);
    }, []);

    return { movies, loading, error };
};