import { useEffect, useState } from "react";
import { PaginateTeams } from "../models/Teams";
import { setDeleteValueTeam, setValueTeams } from "../redux/slices/teams";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEndpoints } from "./useEndpoints";

export const useTeams = () => {
    const { value } = useAppSelector(({ searchHeader }) => searchHeader);
    const { teams } = useAppSelector(
        ({ teams: teamsSelector }) => teamsSelector
    );
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({ limit: 20, page: 1 });
    const dispatch = useAppDispatch();
    const { getTeams, deleteTeam: deleteTeamEndpint } = useEndpoints();

    const fetchTeams = async () => {
        setLoading(true);
        try {
            const { data } = await getTeams({
                ...pagination,
                search: value,
            });
            dispatch(setValueTeams(data));
        } catch (error) {
            console.error("error", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setPagination((prev) => ({ ...prev, page: 1 }));
        // eslint-disable-next-line
        fetchTeams();
        // eslint-disable-next-line
    }, [value]);

    const setTeams = (newPersons: PaginateTeams | undefined) => {
        dispatch(setValueTeams(newPersons));
    };

    const deleteTeam = async (_id: string) => {
        try {
            await deleteTeamEndpint(_id);
            dispatch(setDeleteValueTeam(_id));
        } catch (error) {
            console.error("error", error);
        }
    };

    const resetTeams = () => {
        dispatch(setValueTeams(undefined));
    };

    return {
        setPagination,
        fetchTeams,
        valueSearchHeader: value,
        pagination,
        loading,
        setLoading,
        setTeams,
        teams,
        deleteTeam,
        resetTeams,
    };
};
