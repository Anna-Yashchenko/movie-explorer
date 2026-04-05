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
        <div>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                &lt;
            </button>

            {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map(pageNum => (
                <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    disabled={pageNum === page}
                >
                    {pageNum}
                </button>
            ))}

            <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                &gt;
            </button>
        </div>
    );
};