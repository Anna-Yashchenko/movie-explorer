interface SearchBarProps {
    query: string;
    onQueryChange: (query: string) => void;
    onSearch: () => void;
}

export const SearchBar = ({ query, onQueryChange, onSearch }: SearchBarProps) => {
    return (
        <div>
            <input
                type="text"
                placeholder="Введите название фильма"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
            />
            <button onClick={onSearch}>Поиск</button>
        </div>
    );
};