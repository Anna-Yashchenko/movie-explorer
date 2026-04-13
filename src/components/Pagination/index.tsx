import styles from './Pagination.module.css';
import { usePaginationRange } from '../../hooks/usePaginationRange';

interface PaginationProps {
    page: number;
    totalPages: number;
    setPage: (page: number) => void;
}

export const Pagination = ({ page, totalPages, setPage }: PaginationProps) => {
    const pages = usePaginationRange(page, totalPages);

    return (
        <div className={styles.pagination}>
            <button
                className={styles.pageButton}
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                ←
            </button>

            {pages.map(pageNum => (
                <button
                    key={pageNum}
                    className={`${styles.pageButton} ${pageNum === page ? styles.active : ''}`}
                    onClick={() => setPage(pageNum)}
                    disabled={pageNum === page}
                >
                    {pageNum}
                </button>
            ))}

            <button
                className={styles.pageButton}
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
            >
                →
            </button>
        </div>
    );
};