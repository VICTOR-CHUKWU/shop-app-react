import React, {useEffect} from 'react';
import CartEmpty from './CartEmpty';
import {useParams} from 'react-router-dom'
import { FaCaretDown, FaCaretUp,FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/ProductActions'

const Cart = () => {
    const Cart = useSelector(state => state.CartReducer.cart);
    const {productId} = useParams()
    console.log(Cart)
    const dispatch = useDispatch();
    const URL = `https://fakestoreapi.com/products/${productId}`;

    // const URL = `http://localhost:8080/api/product/product/${productId}`;

    const fetchApi = async() => {
        try {
         const resp = await fetch(URL)
         const data = await resp.json()
         console.log(data)
         dispatch(addToCart(data))
        } catch (error) {
            console.log(error)
        }
     }
     useEffect(() => {
         fetchApi();
        //  return () => {
        //      dispatch(removeSingleProduct())
        //  }
        
     }, []);
    if(Object.keys(Cart).length === 0){
        return(
            <CartEmpty/>
        )
    };
    return (
        <section className='cart'>
            <div className="container mt-5">
            <h1 className="text-center text-success font-weight-bold text-capitalize mb-5 display__title">welcome to your cart</h1>
                <div className="row">
                   
                    {
                        Cart.map((cartItem) => {
                            const { id, title, image, price } = cartItem;
                            return (
                                <div className='col-12 d-block d-md-flex d-lg-flex align-items-center' key={id}>
                                    <div className=" col-sm-12 col-md-6 col-lg-6">
                                        <div className="bg-white rounded py-2 mb-4 single-product__image">
                                            <img src={image} alt="" className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 d-flex d-md-block d-lg-flex justify-content-between">
                                        <div className="">
                                            <h5>{title}</h5>
                                            <p className="font-weight-bold"> Price: ${price}</p>
                                            <div className="d-flex pl-4 mb-4">
                                                <button className="btn btn-outline-dark" type="button"><FaCaretUp /></button>
                                                <input className=" mx-2 input-quantity" type="text" value={1} />
                                                <button className="btn btn-outline-dark" type="button"><FaCaretDown /></button>
                                                <button className="btn btn-danger ml-2" type="button"><FaTrash /></button>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p className="font-weight-bold"> amount: ${price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </section>
    )
}

export default Cart
