import { createSelector } from "@ngrx/store";
import { mainState } from "./color.reducer";


export const getEntireState = (state: mainState) => state;


export const getColorState = createSelector(
    getEntireState,
    (state: mainState) => state.colorState
);