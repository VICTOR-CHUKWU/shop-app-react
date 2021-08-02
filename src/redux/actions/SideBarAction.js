import {SideBarActions} from '../constants/Action-type';

export const closeSidebar = () =>{
    return{
        type: SideBarActions.CLOSE_SIDEBAR,
    }
}

export const openSidebar = () =>{
    return{
        type: SideBarActions.OPEN_SIDEBAR,
    }
}