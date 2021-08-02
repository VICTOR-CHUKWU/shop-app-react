import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom'
import {singleProduct,removeSingleProduct,addToCart} from '../../redux/actions/ProductActions';
import Loading from '../loading/Loading';
import { Link } from 'react-router-dom';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa';

const SingleProduct = () => {
    const product = useSelector((state) => state.SingleProductReducer);
    console.log(product)
    const dispatch = useDispatch()
    const {productId} = useParams()
    console.log(productId);
    const { id, title,description, image, price, category } = product;
    const URL = `https://fakestoreapi.com/products/${productId}`;
    // const URL = `http://localhost:8080/api/product/product/${productId}`;

    const fetchApi = async() => {
        try {
         const resp = await fetch(URL)
         const data = await resp.json()
         console.log(data)
         dispatch(singleProduct(data))
        } catch (error) {
            console.log(error)
        }
     }
     useEffect(() => {
         fetchApi();
         return () => {
             dispatch(removeSingleProduct())
         }
        
     }, [dispatch]);
     if(Object.keys(product).length === 0){
         return(
             <Loading/>
         )
     }
    return (
        <section className='single-product'>
            <div className="container my-5">
                <h4 className="text-success text-capitalize text-center mb-3">welcome to product page</h4>
                <div className="row mt-5">
                    <div className="col-12 col-md-6">
                        <div className="bg-white rounded py-2 mb-4 single-product__image">
                        <img src={image} alt="product" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 single-product__info mb-4">
                        <h5 className="text-center text-info mb-5">{title}</h5>
                        <span className='pl-4 h5 '> Category: {category}</span>
                        <p className="font-weight-bold text-dark pl-4 my-3">Amount: ${price}</p>
                        <div className="d-flex pl-4 mb-4">
                        <button className="btn btn-outline-dark" type="button"><FaCaretUp/></button>
                        <input className=" mx-2" type="text" value={1} />
                         <button className="btn btn-outline-dark" type="button"><FaCaretDown/></button>
                        </div>
                        <div className="d-flex text-center pl-1  mt-5">
                        <button className="btn btn-success  mx-2" type="button" onClick={()=> dispatch(addToCart(id))}>Add to Cart</button>
                        <Link to='/cart'>
                        <button className="btn btn-info  mx-2" type="button">Go to Cart</button>
                        </Link>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <p className='text-center text-info lh-base lead '>{description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProduct;
