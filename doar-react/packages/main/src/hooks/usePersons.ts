import { useEffect, useState } from "react";
import { PaginatePersons } from "../models/Person";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setValuePersons } from "../redux/slices/persons";
import { useEndpoints } from "./useEndpoints";

export interface IQueryPersons {
    workLoad?: number;
    skills: string[];
}

export const usePersons = () => {
    const { value } = useAppSelector(({ searchHeader }) => searchHeader);
    const { persons } = useAppSelector(
        ({ persons: personsSelector }) => personsSelector
    );
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({ limit: 20, page: 1 });
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState<IQueryPersons>({
        workLoad: undefined,
        skills: [],
    });
    const { getPersons } = useEndpoints();

    const fetchPersons = async (
        options: Partial<Record<string, number | string>> = {}
    ) => {
        setLoading(true);
        try {
            const { data } = await getPersons({
                ...pagination,
                search: value,
                ...query,
                ...options,
            });

            dispatch(setValuePersons(data));
        } catch (error) {
            console.error("error", error);
        } finally {
            setLoading(false);
        }
    };

    const setDataQuery = <T extends keyof IQueryPersons>(
        key: T,
        valueQuery: IQueryPersons[T]
    ) => {
        setQuery((prev) => ({ ...prev, [key]: valueQuery }));
    };

    useEffect(() => {
        if (pagination.page > 1)
            setPagination((prev) => ({ ...prev, page: 1 }));
        // eslint-disable-next-line
    }, [value]);
    useEffect(() => {
        // eslint-disable-next-line
        fetchPersons();
        // eslint-disable-next-line
    }, [query]);

    const setPersons = (newPersons: PaginatePersons | undefined) => {
        dispatch(setValuePersons(newPersons));
    };

    const resetPersons = () => {
        dispatch(setValuePersons(undefined));
    };

    return {
        setPagination,
        fetchPersons,
        valueSearchHeader: value,
        pagination,
        loading,
        setLoading,
        setPersons,
        query,
        setDataQuery,
        persons,
        resetPersons,
    };
};
