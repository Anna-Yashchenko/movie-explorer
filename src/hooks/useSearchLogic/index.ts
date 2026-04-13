import { useState } from 'react';
import { useMovieSearch } from '../useMovieSearch';

export const useSearchLogic = () => {
    const [query, setQuery] = useState('');
    const [searched, setSearched] = useState(false);
    const { foundMovies, loading: isSearching, error: searchError, search } = useMovieSearch();

    const handleSearch = async () => {
        if (!query.trim()) return;
        setSearched(true);
        await search(query);
        setQuery('');
    };

    const resetSearch = () => {
        setSearched(false);
        setQuery('');
    };

    return {
        query,
        setQuery,
        searched,
        foundMovies,
        isSearching,
        searchError,
        handleSearch,
        resetSearch,
    };
};