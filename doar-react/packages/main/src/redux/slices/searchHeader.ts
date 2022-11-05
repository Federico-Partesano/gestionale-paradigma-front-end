import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchHeader {
    value: string;
}

const initialState = { value: "" } as SearchHeader;

const searchHeaderSlice = createSlice({
    name: "consultants",
    initialState,
    reducers: {
        setValueSearchHeader(
            state: SearchHeader,
            action: PayloadAction<string>
        ) {
            state.value = action.payload;
        },
    },
});

export const { setValueSearchHeader } = searchHeaderSlice.actions;
export default searchHeaderSlice.reducer;
