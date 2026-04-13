import { create } from 'zustand';
import { LS_KEYS } from '../../constants';
import type {Movie} from "../../types";

interface FavoritesStore {
    favorites: Movie[];
    toggleFavorite: (movie: Movie) => void;
}

const loadFavorites = (): Movie[] => {
    const stored = localStorage.getItem(LS_KEYS.FAVORITES);
    return stored ? JSON.parse(stored) : [];
};

export const useFavoritesStore = create<FavoritesStore>((set) => ({
    favorites: loadFavorites(),

    toggleFavorite: (movie) => set((state) => {
        const exists = state.favorites.some((fav) => fav.id === movie.id);
        const newFavorites = exists
            ? state.favorites.filter((fav) => fav.id !== movie.id)
            : [...state.favorites, movie];

        localStorage.setItem(LS_KEYS.FAVORITES, JSON.stringify(newFavorites));

        return { favorites: newFavorites };
    }),
}));