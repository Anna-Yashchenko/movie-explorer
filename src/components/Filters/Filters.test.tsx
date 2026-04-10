import { render, screen } from '@testing-library/react';
import {Filters} from "./index";
import { vi } from 'vitest';

const mockGenres = [{ id: 28, name: 'Боевик' }];

const mockProps = {
    genres: mockGenres,
    selectedGenreId: undefined,
    onGenreChange: vi.fn(),
    selectedYear: undefined,
    onYearChange: vi.fn(),
    selectedRating: undefined,
    onRatingChange: vi.fn(),
};

describe('Filters', () => {
    test('displays genre options', () => {
        render(
            <Filters {...mockProps} />
        )

        expect(screen.getByText('Боевик')).toBeInTheDocument();
    })
})