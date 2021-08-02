import { UserActions } from "../constants/Action-type";

const initialstate = {
    isLogged : true,
}

export const UserReducer = (state= initialstate.isLogged, action) => {
     if(action.type === UserActions.LOGIN){
         return true;
     }

     return state;
}