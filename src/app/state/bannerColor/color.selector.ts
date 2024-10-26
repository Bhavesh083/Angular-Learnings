import { createFeatureSelector, createSelector } from "@ngrx/store";
import { appState } from "./color.reducer";


export const getEntireState =  createFeatureSelector<appState>('myState');


export const getColorState = createSelector(
    getEntireState,
    (state: appState) => state.colorState
);