import { createAction, props } from "@ngrx/store";


export const changeColor = createAction('Change Color', props<{color: string}>());

export const resetColor = createAction('Reset Color');

// createAction(TYPE, PAYLOAD)