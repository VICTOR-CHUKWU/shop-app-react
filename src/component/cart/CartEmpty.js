import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
    return (
        <section>
            <div className="container className='cart-empty">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h1 className="display__title mb-5 text-center text-success">Cart is Empty</h1>
                       <div className="col-12 d-flex justify-content-center">
                       <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-cart-empty icon-tabler icon-tabler-shopping-cart"  viewBox="0 0 24 24" strokeWidth="2" stroke="#00abfb" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                       </div>
                    </div>
                    <div className="col-12 d-flex justify-content-end mx-5">
                        <Link to='/'>
                            <button className='btn btn-success' type='button'>Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartEmpty
