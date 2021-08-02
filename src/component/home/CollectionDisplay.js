import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {allProducts} from '../../redux/actions/ProductActions';

const URL = 'https://fakestoreapi.com/products';
// const URL = "http://localhost:8080/api/product/"
const CollectionDisplay = ({title, seeall,sliceStart,sliceEnd}) => {
    const products = useSelector((state) => state.ProductsReducer.products);
   
    const dispatch = useDispatch()
    const fetchApi = async() => {
       try {
        const resp = await fetch(URL)
        const data = await resp.json()
        dispatch(allProducts(data))
       } catch (error) {
           console.log(error)
       }
    }
    useEffect(() => {
        fetchApi()
       
    }, []);
    return (
        <section className={`collection-display mt-3 mb-5 pt-3`}>
            <div className="container collection-display__containerr  pt-3 rounded">
           <div className={`d-flex justify-content-between align-items-center p-2 m-0 `}>
           <h2 className='display__title text-capitalize fw-bold mb-2'>{title}</h2>
           <span>{seeall}</span>
           </div>
                <div className="row">
                   {
                       products.slice(sliceStart,sliceEnd).map((product,index) =>{
                        const { id, title, image, price, category } = product;
                           return(
                               <div className="col-3 col-md-3 col-lg-2 p-2 " key={index}>
                                  <div className="bg-white rounded">
                                  <div className='collection-display__images p-2 rounded'>
                                  <img src={image} alt="" className='rounded img-fluid' />
                                  </div>
                                 <div className="bg-dark px-2 rounded">
                                 <p className=' display__product-title text-white'>{title}</p>
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

export default CollectionDisplay
