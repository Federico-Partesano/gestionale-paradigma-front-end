import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Skill } from "../../models/Skills";

interface SkillsState {
    skills: Skill[] | undefined;
}

const initialState = { skills: undefined } as SkillsState;

const skillsSlice = createSlice({
    name: "skills",
    initialState,
    reducers: {
        setValueSkills(state: SkillsState, action: PayloadAction<Skill[]>) {
            state.skills = action.payload;
        },
        addNewSkill(state: SkillsState, action: PayloadAction<Skill>) {
            state.skills = [...(state.skills || []), action.payload];
        },
        editSkill(state: SkillsState, { payload }: PayloadAction<Skill>) {
            state.skills = state.skills
                ? state.skills.map((skill) =>
                      skill._id !== payload._id ? skill : payload
                  )
                : state.skills;
        },
    },
});

export const { setValueSkills, addNewSkill, editSkill } = skillsSlice.actions;
export default skillsSlice.reducer;
