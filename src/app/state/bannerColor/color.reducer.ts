import { trackColor } from "src/app/models/trackColor";
import { changeColor } from "./color.action";

export interface mainState{
    colorState : trackColor;
    cart: [],
    //we can put other states here etc
}

export const initialState: mainState = {
    colorState: { 
        prevColor : '',
        curColor : 'brown',
        changeTime : new Date()
    },
    cart: []
}

export function mainReducer(state = initialState, action: any): mainState{
    switch(action.type){
        case changeColor.type:
            const newColorState: trackColor = {
                prevColor : state.colorState.curColor,
                curColor : action.color,
                changeTime : new Date()
            }
            return {cart: [], colorState : newColorState};
        default:
            console.log(state);
            return state;
    }
}