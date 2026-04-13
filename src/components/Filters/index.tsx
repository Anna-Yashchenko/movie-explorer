import styles from './Filters.module.css';
import type {Item}  from '../../types';

interface FiltersProps {
    genres: Item[];
    selectedGenreId: number | undefined;
    onGenreChange: (id: number | undefined) => void;
    selectedYear: number | undefined;
    onYearChange: (year: number | undefined) => void;
    selectedRating: number | undefined;
    onRatingChange: (rating: number | undefined) => void;
}

export const Filters = ({
                            genres,
                            selectedGenreId,
                            onGenreChange,
                            selectedYear,
                            onYearChange,
                            selectedRating,
                            onRatingChange,
                        }: FiltersProps) => {
    return (
        <div className={styles.filtersContainer}>
            <select className={styles.select} value={selectedGenreId || ''} onChange={(e) => onGenreChange(e.target.value ? Number(e.target.value) : undefined)}>
                <option value="">Жанр</option>
                {genres.map(genre => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>

            <select className={styles.select} value={selectedYear || ''} onChange={(e) => onYearChange(e.target.value ? Number(e.target.value) : undefined)}>
                <option value="">Год</option>
                {Array.from({ length: 2025 - 1990 + 1 }, (_, i) => 1990 + i).map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>

            <select className={styles.select} value={selectedRating || ''} onChange={(e) => onRatingChange(e.target.value ? Number(e.target.value) : undefined)}>
                <option value="">Рейтинг</option>
                <option value="4">От 4★</option>
                <option value="5">От 5★</option>
                <option value="6">От 6★</option>
                <option value="7">От 7★</option>
                <option value="8">От 8★</option>
            </select>
        </div>
    );
};