/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTheme } from "@doar/shared/types";

export interface UIState {
    theme: TTheme;
}

const initialState: UIState = {
    theme: "classic",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state, action: PayloadAction<{ theme: TTheme }>) {
            const {
                payload: { theme },
            } = action;

            state.theme = theme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
