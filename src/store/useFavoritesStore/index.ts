import { create } from 'zustand';
import type { Movie } from "../../types/Movie";

interface FavoritesStore {
    favorites: Movie[];
    toggleFavorite: (movie: Movie) => void;
}

const loadFavorites = (): Movie[] => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
};

export const useFavoritesStore = create<FavoritesStore>((set) => ({
    favorites: loadFavorites(),

    toggleFavorite: (movie) => set((state) => {
        const exists = state.favorites.some((fav) => fav.id === movie.id);
        const newFavorites = exists
            ? state.favorites.filter((fav) => fav.id !== movie.id)
            : [...state.favorites, movie];

        localStorage.setItem('favorites', JSON.stringify(newFavorites));

        return { favorites: newFavorites };
    }),
}));