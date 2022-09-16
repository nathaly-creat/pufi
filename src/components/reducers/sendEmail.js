import { SEND_EMAIL } from "../../../src/actions/types.js"

const initialState = {
    email : [],
}

export const sendEmailReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_EMAIL: 
            return {...state, email:action.payload};
        default:
            return state;
    }
};