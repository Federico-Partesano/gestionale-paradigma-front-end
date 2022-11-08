import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQueryPersons } from "../../hooks/usePersons";
import { PaginatePersons } from "../../models/Person";

interface PersonsState {
    persons: PaginatePersons | undefined;
    pagination: { limit: number; page: number };
    query: IQueryPersons;
}

const initialState = {
    persons: undefined,
    pagination: { limit: 20, page: 1 },
    query: {
        workLoad: undefined,
        skills: [],
        sector: "",
        "workload<": undefined,
        "workload>": undefined,
    },
} as PersonsState;

const personsSlice = createSlice({
    name: "persons",
    initialState,
    reducers: {
        setValuePersons(
            state: PersonsState,
            { payload }: PayloadAction<PaginatePersons | undefined>
        ) {
            state.persons = payload;
        },
        setValuePaginationPersons(
            state: PersonsState,
            { payload }: PayloadAction<PersonsState["pagination"]>
        ) {
            state.pagination = payload;
        },
        setValueQueryPersons(
            state: PersonsState,
            { payload }: PayloadAction<PersonsState["query"]>
        ) {
            state.query = payload;
        },
    },
});

export const {
    setValuePersons,
    setValuePaginationPersons,
    setValueQueryPersons,
} = personsSlice.actions;
export default personsSlice.reducer;
