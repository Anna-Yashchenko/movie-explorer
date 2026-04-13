import { useMemo } from 'react';

export const usePaginationRange = (page: number, totalPages: number, maxVisible: number = 3) => {
    return useMemo(() => {
        let startPage = Math.max(1, page - Math.floor(maxVisible / 2));
        let endPage = startPage + maxVisible - 1;

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }, [page, totalPages, maxVisible]);
};