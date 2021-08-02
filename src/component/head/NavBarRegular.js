
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {openSidebar} from '../../redux/actions/SideBarAction';
import { Link } from "react-router-dom";
import { FaUserAlt, FaBox } from "react-icons/fa";

const NavBarRegular = () => {
    const sidebarOpen =useSelector((state) => state.sideBarCheck);
    const dispatch = useDispatch()
    return (
        <section className='bg-white shadow pt-3 pb-3 navy-bar'>
            <div className="container">
                <div className="row text-center d-flex align-items-center ">
                    <div className="col-12 col-md-3 col-lg-2 d-flex justify-content-between align-items-center mb-2">
                        <div className="span-bar-toggle" onClick={()=> dispatch(openSidebar())}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="span-bar-toggle-regular" onClick={()=> console.log('navy')}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        
                        <span className="fw-bold">
                        <Link to='/' className="fw-bold text-dark" style={{textDecoration: "none"}}>
                            pablo Mak
                            </Link>
                        </span>
                        
                        <div className=" d-flex d-md-none d-lg-none">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon mobile-icon icon-tabler icon-tabler-user" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon mobile-icon icon-tabler icon-tabler-shopping-cart" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="6" cy="19" r="2" />
                                    <circle cx="17" cy="19" r="2" />
                                    <path d="M17 17h-11v-14h-2" />
                                    <path d="M6 5l14 1l-1 7h-13" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-6 w-100">
                        <form className="d-flex">
                            <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 d-none d-md-flex  align-items-center navy-bar__links">
                        <div className="dropdown mr-1 ">
                            <button className="btn btn-main dropdown-toggle d-flex align-items-center" type="button" data-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                </svg>
                                Login
                                <span className="caret"></span></button>
                                <ul className="dropdown-menu  bg-white shadow w-100">
                                <li className='border-bottom pb-2 px-2'><Link to='/customer/account/login'  style={{textDecoration: "none"}}><span className='text-white btn btn-success w-100'>Login</span></Link></li>
                                <li className='pl-2 mt-2'><Link to='/customer/account/create'  style={{textDecoration: "none"}}><span className='text-success w-100 text-uppercase font-weight-bold'>Create account</span></Link></li>
                                <li className='pl-2 mt-2'><Link to='/customer/account/login'  style={{textDecoration: "none"}}><FaUserAlt className='text-dark mr-2'/><span className='text-dark font-weight-bold'>Account</span></Link></li>
                                <li className='pl-2 mt-2'><Link to='/'  style={{textDecoration: "none"}}><FaBox className='text-dark mr-2'/><span className='text-dark font-weight-bold'>Orders</span></Link></li>
                            </ul>
                        </div>
                        <div className="dropdown mr-1">

                            <button className="btn btn-main dropdown-toggle d-flex align-items-center" type="button" data-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="12" cy="12" r="9" />
                                    <line x1="12" y1="17" x2="12" y2="17.01" />
                                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                </svg>
                                help?
                                <span className="caret"></span></button>
                            <ul className="dropdown-menu pl-3 bg-primary">
                                <li><span>HTML</span></li>
                                <li><span>CSS</span></li>
                                <li><span>JavaScript</span></li>
                            </ul>
                        </div>
                        <div className=''>
                            <Link to='/cart' style={{textDecoration: "none"}}>
                            <button className="btn btn-main d-flex align-items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx="6" cy="19" r="2" />
                                    <circle cx="17" cy="19" r="2" />
                                    <path d="M17 17h-11v-14h-2" />
                                    <path d="M6 5l14 1l-1 7h-13" />
                                </svg>
                                Cart
                                </button>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>

        </section >
    )
}

export default NavBarRegular
