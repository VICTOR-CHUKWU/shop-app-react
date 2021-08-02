import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {allProducts} from '../../redux/actions/ProductActions';
import { Link } from 'react-router-dom';
import Loading from '../loading/Loading';

const URL = 'https://fakestoreapi.com/products';
// const URL = "http://localhost:8080/api/product/"
const ProductDisplay = ({title, seeall, styleName,sliceStart,sliceEnd,mediumsliceStart,mediumsliceEnd}) => {
    const products = useSelector((state) => state.ProductsReducer.products);
   
    const dispatch = useDispatch()
    const fetchApi = async() => {
       try {
        const resp = await fetch(URL)
        const data = await resp.json()
        dispatch(allProducts(data))
        setTimeout(() => {
            console.log(products,data)
        }, 3000);
       } catch (error) {
           console.log(error)
       }
    }
    useEffect(() => {
        fetchApi()
       
    }, []);
    if(Object.keys(products).length === 0){
        return(
            <Loading/>
        )
    }

    return (
        <section className='product-display  mt-3 pt-3'>
            <div className="container bg-white pt-3 rounded">
           <div className={`d-flex justify-content-between align-items-center p-2 m-0 ${styleName}`}>
           <h2 className='display__title text-capitalize fw-bold mb-2'>{title}</h2>
           <span>{seeall}</span>
           </div>
                <div className="row d-none d-lg-flex">
                   {
                       products.slice(sliceStart,sliceEnd).map((product,index) =>{
                        const { id, title, image, price, category } = product;
                           return(
                               <div className="col-3 col-md-3 col-lg-2 p-2" key={index}>
                                  <Link to={`product/${id}`}>
                                  <div className='product-display__images p-2 rounded'>
                                  <img src={image} alt="" className='rounded img-fluid' />
                                  </div>
                                  </Link>
                                  <p className=' display__product-title'>{title}</p>
                                  <p className=' price'>${price}</p>
                               </div>
                           )
                       })
                   }
                </div>
                <div className="row d-sm-flex d-md-flex d-lg-none">
                   {
                       products.slice(mediumsliceStart,mediumsliceEnd).map((product,index) =>{
                        const { id, title, image, price, category } = product;
                           return(
                               <div className="col-3 col-md-3 col-lg-2 p-2" key={index}>
                                   <Link to={`product/${id}`}>
                                  <div className='product-display__images p-2 rounded'>
                                  <img src={image} alt="" className='rounded img-fluid' />
                                  </div>
                                  </Link>
                                  <p className=' display__product-title'>{title}</p>
                                  <p className=' price'>${price}</p>
                               </div>
                           )
                       })
                   }
                </div>
            </div>
        </section>
    )
}

export default ProductDisplay;
