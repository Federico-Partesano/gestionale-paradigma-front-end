import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sector } from "../../models/Sectors";

interface SectorsState {
    sectors: Sector[] | undefined;
}

const initialState = { sectors: undefined } as SectorsState;

const sectorsSectors = createSlice({
    name: "sectors",
    initialState,
    reducers: {
        setValueSectors(state: SectorsState, action: PayloadAction<Sector[]>) {
            state.sectors = action.payload;
        },
        addNewSector(state: SectorsState, action: PayloadAction<Sector>) {
            state.sectors = [...(state.sectors || []), action.payload];
        },
        editSector(state: SectorsState, { payload }: PayloadAction<Sector>) {
            state.sectors = state.sectors
                ? state.sectors.map((sector) =>
                      sector._id !== payload._id ? sector : payload
                  )
                : state.sectors;
        },
    },
});

export const { setValueSectors, addNewSector, editSector } =
    sectorsSectors.actions;
export default sectorsSectors.reducer;
