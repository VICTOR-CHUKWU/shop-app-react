import React from 'react';
import pics from '../images/testProfile.jpeg';
import {FaCaretDown} from 'react-icons/fa'

const DashNav = () => {
    return (
        <section className='bg-blue py-3 px-1 px-lg-5 dash-nav'>
            <div className="container">
                <div className="row">
                   <div className="col-6">
                      <p className="text-white">welcome victor chukwu</p>
                   </div>
                   <div className="col-6  dash-profile">
                       <div className=" d-flex align-items-center dash-profile__small">
                          <div className="image">
                          <img src={pics} alt=""  className='img-fluid '/>
                          </div>
                           <span className=" text-white pl-3"><FaCaretDown/></span>
                       </div>
                      
                   </div>
                </div>
            </div>
        </section>
    )
}

export default DashNav
