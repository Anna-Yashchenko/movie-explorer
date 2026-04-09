import styles from './Pagination.module.css';

interface PaginationProps {
    page: number;
    totalPages: number;
    setPage: (page: number) => void;
}

export const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {

    const maxVisible = 3;
    let startPage = Math.max(1, page - Math.floor(maxVisible / 2));
    let endPage = startPage + maxVisible - 1;

    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - maxVisible + 1);
    }

    return (
        <div className={styles.pagination}>
            <button className={styles.pageButton} onClick={() => setPage(page - 1)} disabled={page === 1}>
                ←
            </button>

            {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(pageNum => (
                <button
                    key={pageNum}
                    className={`${styles.pageButton} ${pageNum === page ? styles.active : ''}`}
                    onClick={() => setPage(pageNum)}
                    disabled={pageNum === page}
                >
                    {pageNum}
                </button>
            ))}

            <button className={styles.pageButton} onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                →
            </button>
        </div>
    );
};