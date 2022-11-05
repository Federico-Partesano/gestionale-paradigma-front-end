import { PaginateResults } from "./PaginateResults";
import { Team } from "./Teams";


type Sector = { _id: string; value: string } | null
export interface Person<
    T extends string[] | { _id: string; value: string }[] = {
        _id: string;
        value: string;
    }[]
, K extends Sector |  string = Sector> {
    _id: string;
    name: string;
    surname: string;
    email: string;
    skills: T;
    sector: K;
    workLoad: number;
    teams: Team[];
}

export type PaginatePersons = PaginateResults<Person>;
