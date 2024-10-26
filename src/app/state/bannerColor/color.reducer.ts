import { trackColor } from "src/app/models/trackColor";
import { changeColor, resetColor } from "./color.action";

export interface appState{
    colorState : trackColor;
    cart: string[],
    //we can put other states here
}

// this is just used for initialization, this is not treated as state.
export const initialState: appState = {
    colorState: { 
        prevColor : '',
        curColor : 'brown',
        changeTime : new Date()
    },
    cart: ['a','b']
}

export function mainReducer(state = initialState, action: any){
    switch(action.type){

        case changeColor.type:
            const newColorState: trackColor = {
                prevColor : state.colorState.curColor,
                curColor : action.color,
                changeTime : new Date()
            }
            return {cart: state.cart, colorState : newColorState};

        case resetColor.type:
            return {cart: state.cart, colorState : initialState.colorState};
        
        default:
            return state;

    }
}