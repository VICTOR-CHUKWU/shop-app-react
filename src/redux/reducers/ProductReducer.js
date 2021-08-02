import { Productactions } from "../constants/Action-type";

const initialstate = {
    products: [],
    cart: [ ],
    total: 0,
    amount: 0,
    quantity:0,
    incart: false,
}
export  const ProductsReducer = (state=initialstate, {type, payload}) => {
    if(type === Productactions.ALL_PRODUCTS){
        return {...state, products: payload}
    }
    return state;
}
export const SingleProductReducer= (state=[], {type, payload}) => {
    if(type === Productactions.SINGLE_PRODUCT){
        return{...state, ...payload}
    }
    if(type === Productactions.REMOVE_SINGLEPRODUCT){
        return {}
    }
    return state;
}
export const CartReducer = (state=initialstate, {type,payload}) => {
    //a fnction to get item by id
    // const getItem = (id) => {
    //     const product = state.products.find(item => item.id ===id);
    //     return product;
    // };
    if(type === Productactions.ADD_TO_CART){

        //a temporary variable for product data
        // const tempProduct = [...state.products]
        // console.log(tempProduct)

        //get the index of item in the product
        // const index = tempProduct.indexOf(getItem(payload));

        //get cartproduct
        const cartProduct = state.products.find(item => item.id ===payload);
        return {
            ...state,
            cart: [...state.cart, {...cartProduct, incart:true, quantity: 1}]
            
        }
    }
    return state;
}

// export const CartReducer = (state=initialstate, {type,payload}) => {
//     if(type === Productactions.ADD_TO_CART){
//         const cartProduct = state.products.find(item => item.id ===payload);
//         return {
//             ...state,
//             cart: [...state.cart, {...cartProduct, incart:true, quantity: 1}]
            
//         }
//     }
//     return state;
// }