import styles from './SearchBar.module.css';

interface SearchBarProps {
    query: string;
    onQueryChange: (query: string) => void;
    onSearch: () => void;
}

export const SearchBar = ({ query, onQueryChange, onSearch }: SearchBarProps) => {
    return (
        <div className={styles.searchContainer}>
            <input
                className={styles.input}
                type="text"
                placeholder="Введите название фильма"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
            />
            <button className={styles.button} onClick={onSearch} aria-label="Поиск" />
        </div>
    );
};