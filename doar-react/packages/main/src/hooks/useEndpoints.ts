import { useMemo } from "react";
import axios from "axios";
import { PaginatePersons, Person } from "../models/Person";
import { PaginateTeams } from "../models/Teams";
import { Skill } from "../models/Skills";
import { PaginateResults } from "../models/PaginateResults";
import { Sector } from "../models/Sectors";
const apiUrl = "http://localhost:3005";
// const apiUrl = "https://marcocont.herokuapp.com";

interface BodyAddTeam {
    name: string;
    description: string;
    persons: { person: string; contractType: string }[];
    startDate: number;
    endDate: number;
}

interface IGetPagination {
    limit?: number;
    page?: number;
}

export const useEndpoints = () =>
    useMemo(
        () => ({
            // eslint-disable-next-line
            getPersons: (params: Record<string, any>) =>
                axios.get<PaginatePersons>(`${apiUrl}/persons`, {
                    params,
                }),
            addNewPerson: (
                body: Omit<
                    Person<string[], string>,
                    "__v" | "workLoad" | "teams" | "_id"
                >
            ) => axios.post(`${apiUrl}/persons`, body),
            editPerson: (
                id: string,
                body: Omit<
                    Person<string[], string>,
                    "__v" | "workLoad" | "teams" | "_id"
                >
            ) => axios.patch(`${apiUrl}/persons/${id}`, body),
            deletePerson: (id: string) =>
                axios.delete<{ message: string }>(`${apiUrl}/persons/${id}`),
            // eslint-disable-next-line
            getTeams: (query: Record<string, any>) =>
                axios.get<PaginateTeams>(`${apiUrl}/teams`, {
                    params: query,
                }),
            editTeam: (id: string, body: BodyAddTeam) =>
                axios.post<{ message: "ok" }>(`${apiUrl}/teams/${id}`, body),
            addNewTeam: (body: BodyAddTeam) =>
                axios.post<{ message: "ok" }>(`${apiUrl}/teams`, body),
            deleteTeam: (id: string) =>
                axios.delete<{ message: string }>(`${apiUrl}/teams/${id}`),
            getSkills: <T extends IGetPagination>(params: T = {} as T) =>
                axios.get<
                    T["page"] extends number
                        ? T["limit"] extends number
                            ? PaginateResults<Skill>
                            : Skill[]
                        : Skill[]
                >(`${apiUrl}/skills`, { params }),

            addNewSkill: (value: string) =>
                axios.post<{ _id: string; value: string }>(`${apiUrl}/skills`, {
                    value,
                }),
            deleteSkill: (id: string) =>
                axios.delete<{ message: string }>(`${apiUrl}/skills/${id}`),
            editSkill: (id: string, value: string) =>
                axios.post<{ message: string }>(`${apiUrl}/skills/${id}`, {
                    value,
                }),
            editSector: (id: string, value: string) =>
                axios.post<{ message: string }>(`${apiUrl}/sectors/${id}`, {
                    value,
                }),
            getSectors: <T extends IGetPagination>(params: T = {} as T) =>
                axios.get<
                    T["page"] extends number
                        ? T["limit"] extends number
                            ? PaginateResults<Sector>
                            : Sector[]
                        : Sector[]
                >(`${apiUrl}/sectors`, { params }),
            addNewSector: (value: string) =>
                axios.post<{ _id: string; value: string }>(
                    `${apiUrl}/sectors`,
                    {
                        value,
                    }
                ),
        }),
        []
    );
