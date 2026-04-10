import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MovieCard } from './index';
import { useFavoritesStore } from '../../store/useFavoritesStore';

const mockMovie = {
    id: 123,
    title: 'Avatar',
    poster_path: '/avatar.jpg',
    vote_average: 8.5,
    release_date: '2009-12-10',
    overview: 'Awesome movie',
    genre_ids: [],
    genres: [{ id: 28, name: 'Action' }],
    popularity: 100.5,
};

vi.mock('../../store/useFavoritesStore');

describe('MovieCard', () => {
    beforeEach(() => {
        vi.mocked(useFavoritesStore).mockReturnValue({
            favorites: [],
            toggleFavorite: vi.fn(),
        });
    });

    test('renders movie title', () => {
        render(
            <BrowserRouter>
                <MovieCard movie={mockMovie} />
            </BrowserRouter>
        );
        expect(screen.getByText('Avatar')).toBeInTheDocument();
    });

    test('renders movie rating', () => {
        render(
            <BrowserRouter>
                <MovieCard movie={mockMovie} />
            </BrowserRouter>
        );
        expect(screen.getByText(/8.5/)).toBeInTheDocument();
    });
});