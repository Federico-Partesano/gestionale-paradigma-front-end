import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginatePersons } from "../../models/Person";

interface PersonsState {
    persons: PaginatePersons | undefined;
}

const initialState = { persons: undefined } as PersonsState;

const personsSlice = createSlice({
    name: "persons",
    initialState,
    reducers: {
        setValuePersons(
            state: PersonsState,
            action: PayloadAction<PaginatePersons | undefined>
        ) {
            state.persons = action.payload;
        },
    },
});

export const { setValuePersons } = personsSlice.actions;
export default personsSlice.reducer;
