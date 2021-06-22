export interface IBaseResponse<T> {
    success: boolean;
    data: T;
}

export interface IPaginationAPIResponse<T> {
    items: Array<T>;
    currentItemCount: number;
    currentPage: string;
    itemPerPage: number;
    lastPage: boolean;
    totalItems: number;
    totalPage: number;
}


