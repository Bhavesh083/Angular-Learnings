import { createAction, props } from "@ngrx/store";


export const changeColor = createAction('Change Color', props<{color: string}>());

// createAction(TYPE, PAYLOAD)