import { useState } from 'react';
import { searchMovies, getGenres } from '../../api/tmdb';

import type { Movie, Item} from '../../types'

export const useMovieSearch = () => {
    const [foundMovies, setFoundMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const search = async (query: string) => {
        setLoading(true);
        try {
            const results = await searchMovies(query);
            const genresResponse = await getGenres();

            const moviesWithGenres = results.map((movie: Movie) => ({
                ...movie,
                genres: movie.genre_ids?.map((id: number) => {
                    const genre = genresResponse.find((g: Item) => g.id === id);
                    return { id, name: genre?.name || 'неизвестно' };
                }) || []
            }));

            setFoundMovies(moviesWithGenres);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Произошла ошибка');
        } finally {
            setLoading(false);
        }
    };

    return { foundMovies, loading, error, search };
};