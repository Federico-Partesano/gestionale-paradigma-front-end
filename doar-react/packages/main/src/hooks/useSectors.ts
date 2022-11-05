import { useEffect, useState } from "react";
import { Sector } from "../models/Sectors";
import { PaginateResults } from "../models/PaginateResults";
import { useAppSelector } from "../redux/hooks";
import { useEndpoints } from "./useEndpoints";

export interface IQuerySkills {
    search: string;
}

export const useSectors = () => {
    const { value } = useAppSelector(({ searchHeader }) => searchHeader);
    const [sectors, setSectors] = useState<PaginateResults<Sector>>();
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({ limit: 20, page: 1 });
    const { getSectors } = useEndpoints();

    const fetchSectors = async (
        options: Partial<Record<string, number | string>> = {}
    ) => {
        setLoading(true);
        try {
            const { data } = await getSectors({
                ...pagination,
                search: value,
                ...options,
            });
            setSectors(data);
        } catch (error) {
            console.error("error", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (pagination.page > 1)
            setPagination((prev) => ({ ...prev, page: 1 }));
        // eslint-disable-next-line
    }, [value]);

    return {
        fetchSectors,
        setPagination,
        valueSearchHeader: value,
        pagination,
        loading,
        setLoading,
        sectors,
    };
};
