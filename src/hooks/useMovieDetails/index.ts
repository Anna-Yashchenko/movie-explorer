import {useState, useEffect} from 'react';
import {getMovieDetails} from '../../api/tmdb';
import type {MovieDetails} from "../../types/Movie";

export const useMovieDetails = (id?: string) => {
    const [movie, setMovie] = useState<MovieDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setError('ID не указан');
            setLoading(false);
            return;
        }
        const fetchData = async () => {
            try {
                const response = await getMovieDetails(id);
                setMovie(response);
                setError(null);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Произошла ошибка');
            } finally {
                setLoading(false);
            }
        };
        fetchData().catch(console.error);
    }, [id]);

    return {movie, loading, error};
};