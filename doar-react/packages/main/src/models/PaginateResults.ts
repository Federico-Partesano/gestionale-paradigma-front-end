export interface PaginateResults<T> {
    docs: T[];
    totalDocs: number;
    offset: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | number;
    nextPage: number | null;
}
