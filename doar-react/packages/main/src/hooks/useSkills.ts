import { useEffect, useState } from "react";
import { PaginateResults } from "../models/PaginateResults";
import { Skill } from "../models/Skills";
import { useAppSelector } from "../redux/hooks";
import { useEndpoints } from "./useEndpoints";

export interface IQuerySkills {
    search: string;
}

export const useSkills = () => {
    const { value } = useAppSelector(({ searchHeader }) => searchHeader);
    const [skills, setSkills] = useState<PaginateResults<Skill>>();
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({ limit: 20, page: 1 });
    const { getSkills } = useEndpoints();

    const fetchSkills = async (
        options: Partial<Record<string, number | string>> = {}
    ) => {
        setLoading(true);
        try {
            const { data } = await getSkills({
                ...pagination,
                search: value,
                ...options,
            });

            setSkills(data);
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
        fetchSkills,
        setPagination,
        valueSearchHeader: value,
        pagination,
        loading,
        setLoading,
        skills,
    };
};
