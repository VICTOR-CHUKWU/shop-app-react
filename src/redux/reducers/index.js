import { combineReducers } from "redux";
import {sideBarCheck} from './SidebarReducer';
import {ProductsReducer, SingleProductReducer,CartReducer} from './ProductReducer';
import { UserReducer } from "./UserReducers";

export const reducers = combineReducers({
    sideBarCheck,
    ProductsReducer,
    SingleProductReducer,
    CartReducer,
    UserReducer
})