import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginateTeams } from "../../models/Teams";

interface TeamsState {
    teams: PaginateTeams | undefined;
}

const initialState = { teams: undefined } as TeamsState;

const teamsSlice = createSlice({
    name: "teams",
    initialState,
    reducers: {
        setValueTeams(
            state: TeamsState,
            action: PayloadAction<PaginateTeams | undefined>
        ) {
            state.teams = action.payload;
        },
        setDeleteValueTeam(state: TeamsState, action: PayloadAction<string>) {
            state.teams = state.teams
                ? {
                      ...state.teams,
                      docs: state.teams?.docs.filter(
                          ({ _id }) => _id !== action.payload
                      ),
                  }
                : undefined;
        },
    },
});

export const { setValueTeams, setDeleteValueTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
