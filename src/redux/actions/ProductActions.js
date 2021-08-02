import { Productactions } from "../constants/Action-type";

export const allProducts = (products) =>{
    return{
        type: Productactions.ALL_PRODUCTS,
        payload: products,
    }
}

export const singleProduct = (product) =>{
    return{
        type: Productactions.SINGLE_PRODUCT,
        payload: product,
    }
}
export const removeSingleProduct = () => {
    return {
        type: Productactions.REMOVE_SINGLEPRODUCT
    }
}
export const addToCart = (id) =>{
    return{
        type: Productactions.ADD_TO_CART,
        payload:id,
    }
}