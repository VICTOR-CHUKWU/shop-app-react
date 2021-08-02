import React from 'react';
import { FaFacebook,FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {useLocation} from 'react-router-dom';

const Footer = () => {
    const Location = useLocation()
    const isCurrentLocation =(url) =>{
        return Location.pathname.toLowerCase() === url.toLowerCase()
    }
    if(isCurrentLocation("/user/dashboard")){
        return null;
    }
    return (
        <section className='footer mt-5 pb-3 pt-4'>
            <div className="container d-none d-md-block d-lg-block">
                <div className="row">
                    <div className="col-2 d-sm-none d-md-none d-lg-flex align-items-center">
                        <p className='font-weight-bold'>Pablo mak</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#fd7e14" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="6" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M17 17h-11v-14h-2" />
                            <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                    </div>
                    <div className=" col-8 col-md-8 col-lg-7">
                        <h3>welcome to pablo mak</h3>
                        <p>subscribe to our news letter</p>
                        <form className="d-flex">
                            <input className="form-control me-2 mr-2" type="email" placeholder="enter email" aria-label="Search" />
                            <button className="btn btn-success mr-1" type="submit">male</button>
                            <button className="btn btn-success ml-1" type="submit">female</button>
                        </form>
                    </div>
                    <div className="col-4 col-lg-3">
                        <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="#fd7e14" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="6" cy="19" r="2" />
                                <circle cx="17" cy="19" r="2" />
                                <path d="M17 17h-11v-14h-2" />
                                <path d="M6 5l14 1l-1 7h-13" />
                            </svg>
                            <div>
                                <p className='font-weight-bold'>download pablo app </p>
                                <span className='display__light'> get access to exclusive offers</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row pt-5 pb-3 footer__bottom">
                    <div className="col-3">
                        <h5>let us help you</h5>
                        <div className="d-block display__light">help center</div>
                        <div className="d-block display__light">get in touch</div>
                        <div className="d-block display__light">how to return a product</div>
                        <div className="d-block display__light">how to book</div>
                        <div className="d-block display__light">how to sell on pablo</div>
                    </div>
                    <div className="col-3">
                        <h5>about pablo</h5>
                        <div className="d-block display__light">about us</div>
                        <div className="d-block display__light">career</div>
                        <div className="d-block display__light">pablo express</div>
                        <div className="d-block display__light">terms and condition</div>
                        <div className="d-block display__light">stay safe</div>
                    </div>
                    <div className="col-3">
                        <h5>make money with pablo</h5>
                        <div className="d-block display__light">sell on pablo</div>
                        <div className="d-block display__light">become a sales consultant</div>
                        <div className="d-block display__light">become a patner</div>
                    </div>
                    <div className="col-3">
                        <h5>pablo international</h5>
                        <div className="d-block display__light">Ghana</div>
                        <div className="d-block display__light">Egypt</div>
                        <div className="d-block display__light">Cameroon</div>
                        <div className="d-block display__light">Ethiopia</div>
                        <div className="d-block display__light">Nigeria</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className='text-center mb-3'>join us on</h5>
                        <div className="d-flex justify-content-center">
                            <FaFacebook className='social-icon mx-3'/>
                            <FaInstagram className='social-icon mx-3'/>
                            <FaLinkedin className='social-icon mx-3'/>
                            <FaTwitter className='social-icon mx-3'/>
                        </div>

                    </div>
                </div>
            </div>
         <div className="container pt-3 d-sm-block d-md-none d-lg-none">
             <div className="row footer__mobile">
                 <div className="col-4">
                     <span className="text-white  text-uppercase">Help center</span>
                 </div>
                 <div className="col-3">
                 <span className="text-white  text-uppercase ">contact us</span>
                 </div>
                 <div className="col-5">
                 <span className="text-white  text-uppercase">terms and conditions</span>
                 </div>
             </div>
             <div className="row pb-5 pt-4 px-4 border-bottom footer__mobile">
                 <div className="col-6">
                 <span className="text-white text-uppercase ml-auto">become a seller</span>
                 </div>
                 <div className="col-6">
                 <span className="text-white  text-uppercase">report a product</span>
                 </div>
             </div>
             <div className="row">
                 <div className="col-12 text-center text-white footer__mobile ">
                     all rights reserved
                 </div>
             </div>
         </div>
        </section>
    )
}

export default Footer
