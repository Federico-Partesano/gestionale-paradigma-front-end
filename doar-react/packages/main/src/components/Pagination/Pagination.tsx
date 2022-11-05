import React, { FC } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import "./Pagination.scss";

interface IPagination {
    hasPrev: boolean;
    hasNext: boolean;
    totalPages: number;
    page: number;
    onChangePage: (page: number) => void;
}

const Pagination: FC<IPagination> = ({
    page,
    hasPrev,
    totalPages,
    hasNext,
    onChangePage,
}) => {
    const prevPage = () => onChangePage(page - 1);
    const nextPage = () => onChangePage(page + 1);
    const lastPage = () => onChangePage(totalPages);
    const firstPage = () => onChangePage(1);
    return (
        <div className="container-pagination">
            {/* // eslint-disable-next-line */}
            {hasPrev && (
                <ArrowLeft
                    cursor={"pointer"}
                    onClick={prevPage}
                    color="#1376ff"
                />
            )}
            {page > 2 && (
                <>
                    {/* eslint-disable-next-line */}
                    <div onClick={firstPage} className="circle">
                        {1}
                    </div>
                    <div className="circle">...</div>
                </>
            )}
            {hasPrev && (
                // eslint-disable-next-line
                <div onClick={prevPage} className={`circle`}>
                    {page - 1}
                </div>
            )}
            <div className="circle active">{page}</div>
            {hasNext && (
                // eslint-disable-next-line
                <div onClick={nextPage} className="circle">
                    {page + 1}
                </div>
            )}
            {page < totalPages - 1 && (
                <>
                    <div className="circle">...</div>
                    {/* eslint-disable-next-line */}
                    <div onClick={lastPage} className="circle">
                        {totalPages}
                    </div>
                </>
            )}
            {/* // eslint-disable-next-line */}
            {hasNext && (
                <ArrowRight
                    cursor={"pointer"}
                    onClick={nextPage}
                    color="#1376ff"
                />
            )}
        </div>
    );
};

export default Pagination;
