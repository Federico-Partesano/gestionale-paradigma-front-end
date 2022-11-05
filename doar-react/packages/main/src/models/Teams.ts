import { PaginateResults } from "./PaginateResults";
import { Person } from "./Person";

export type ContractType = "F.T" | "P.T" | "Q.T";

export interface Team {
    _id: string;
    name: string;
    description: string;
    persons: { person: Person | null; contractType: ContractType }[];
    startDate: number;
    endDate: number;
}

export type PaginateTeams = PaginateResults<Team>;
