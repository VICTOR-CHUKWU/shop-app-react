import {SideBarActions} from '../constants/Action-type';

const initialstate={
    isSideBarOpen: false,
}
export const sideBarCheck = (state=initialstate, action) => {
    if(action.type === SideBarActions.OPEN_SIDEBAR){
        return{state, isSideBarOpen: true}
    }
    if(action.type === SideBarActions.CLOSE_SIDEBAR){
        return {state, isSideBarOpen:false}
    }
    return state;
}

