import React from 'react';
import { FaShopify, FaPlane, FaStarOfDavid } from 'react-icons/fa';
import { RiShieldStarFill } from 'react-icons/ri'

const HomeCategory = () => {
    return (
        <section className='category'>
            <div className="container mb-4">
                <div className="row">
                    <div className=" col-md-3 col-lg-2 d-none d-md-block">
                        <div className="bg-white  mt-4 mb-2 pt-2 carousel-card rounded ">
                            <div className="col-12  pb-1 display__light">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#6c757d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="7" y="4" width="10" height="16" rx="1" />
                                    <line x1="11" y1="5" x2="13" y2="5" />
                                    <line x1="12" y1="17" x2="12" y2="17.01" />
                                </svg>
                                supermarket</div>
                            <div className="col-12 pt-1 display__light">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#6c757d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="7" y="4" width="10" height="16" rx="1" />
                                    <line x1="11" y1="5" x2="13" y2="5" />
                                    <line x1="12" y1="17" x2="12" y2="17.01" />
                                </svg>
                                Health beauty</div>
                            <div className="col-12 pt-1 display__light">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#6c757d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="7" y="4" width="10" height="16" rx="1" />
                                    <line x1="11" y1="5" x2="13" y2="5" />
                                    <line x1="12" y1="17" x2="12" y2="17.01" />
                                </svg>
                                Home Offices</div>
                            <div className="col-12 pt-1 pb-1 display__light">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#6c757d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="7" y="4" width="10" height="16" rx="1" />
                                    <line x1="11" y1="5" x2="13" y2="5" />
                                    <line x1="12" y1="17" x2="12" y2="17.01" />
                                </svg>
                                phone tablet</div>
                            <div className="col-12 pt-1 pb-1 display__light">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#6c757d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="7" y="4" width="10" height="16" rx="1" />
                                    <line x1="11" y1="5" x2="13" y2="5" />
                                    <line x1="12" y1="17" x2="12" y2="17.01" />
                                </svg>
                                phone tablet</div>
                            <div className="col-12 pt-1 pb-1 display__light">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#6c757d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="7" y="4" width="10" height="16" rx="1" />
                                    <line x1="11" y1="5" x2="13" y2="5" />
                                    <line x1="12" y1="17" x2="12" y2="17.01" />
                                </svg>
                                phone tablet</div>
                            <div className="col-12 pt-1 pb-1 display__light">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-mobile" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1" stroke="#6c757d" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <rect x="7" y="4" width="10" height="16" rx="1" />
                                    <line x1="11" y1="5" x2="13" y2="5" />
                                    <line x1="12" y1="17" x2="12" y2="17.01" />
                                </svg>
                                phone tablet</div>
                        </div>

                    </div>
                    {/* carousel starts here */}
                    <div className=" col-sm-12 col-md-6 col-lg-7 mt-4 mb-2">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="carousel-card ">
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop" className="d-block w-100 rounded img-fluid" alt="..." />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel-card">
                                        <img src="https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop" className="d-block w-100 rounded img-fluid" alt="..." />
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="carousel-card">
                                        <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100 rounded img-fluid" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* category right side div starts here */}
                    <div className="col-3 d-none d-md-block ">
                        <div className="carousel-card  mt-4 w-100">
                            <div className="col-12  pb-3  carousel-card__end w-100">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop" className=' rounded img-fluid' alt="" />
                            </div>
                            <div className="col-12  pt-4 carousel-card__end">
                                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop" className=' rounded img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* category foot starts here */}
                <div className="row category-foot">
                    <div className="col-3 col-md-6 col-lg-3 pr-sm-1 pr-md-3  mt-md-3 mt-sm-1 mb-md-3 mb-sm-1 ">
                        <div className=' d-sm-inline d-md-flex align-items-center rounded p-3  category-foot__inner'>
                            <div className="icon-container rounded-circle bg-danger mr-3">
                                <FaShopify className='react-icon text-white' />
                            </div>
                            <div className="display__icon"> Official store</div>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-lg-3 pr-sm-1 pr-md-3  mt-md-3 mt-sm-1 mb-md-3 mb-sm-1 ">
                        <div className=' d-sm-inline d-md-flex align-items-center rounded p-3  category-foot__inner'>
                            <div className="icon-container rounded-circle bg-info mr-3">
                                <FaPlane className='react-icon text-white' />
                            </div>
                            <div className="display__icon"> Pablo Global</div>
                        </div>
                    </div>
                    <div className="col-3 col-md-6 col-lg-3  pr-sm-1 pr-md-3  mt-md-3 mt-sm-1 mb-md-3 mb-sm-1 ">
                        <div className='d-sm-inline d-md-flex align-items-center rounded p-3  category-foot__inner'>
                            <div className="icon-container rounded-circle bg-success mr-3">
                                <FaStarOfDavid className='react-icon text-white' />
                            </div>
                            <div className="display__icon">Pablo money</div>
                        </div>
                    </div>
                    <div className=" col-3 col-md-6 col-lg-3  pr-sm-1 pr-md-3  mt-md-3 mt-sm-1 mb-md-3 mb-sm-1 ">
                        <div className='d-sm-inline d-md-flex align-items-center rounded p-3  category-foot__inner'>
                            <div className="icon-container rounded-circle bg-info mr-3">
                                <RiShieldStarFill className='react-icon text-white' />
                            </div>
                            <div className="display__icon"> Borrow money</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HomeCategory
