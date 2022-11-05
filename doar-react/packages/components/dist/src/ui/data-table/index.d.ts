/// <reference types="react" />
import { TTheme } from "@doar/shared/types";
import { TableColumn } from "react-data-table-component";
interface IProps {
    data: any[];
    columns: TableColumn<any>[];
    theme?: TTheme;
    pagination?: boolean;
    paginationPerPage?: number;
    paginationRowsPerPageOptions?: number[];
    customStyles: {
        [x: string]: any;
    };
}
declare const DataTable: ({ data, columns, theme, customStyles, pagination, paginationPerPage, paginationRowsPerPageOptions, }: IProps) => JSX.Element;
export default DataTable;
