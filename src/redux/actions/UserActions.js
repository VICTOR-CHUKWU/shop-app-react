import { UserActions } from "../constants/Action-type";

export const login = (cb) =>{
    return{
        type: UserActions.LOGIN,
       payload: cb()
    }
}