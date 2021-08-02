import React from 'react';
import pics from '../images/testProfile.jpeg';

const DashSideBar = () => {
    return (
        <section className='bg-blue py-4 px-3 dash-side'>
            <div className="container  pt-3">
                <div className="row">
                <div className="col-12  dash-profile">
                       <div className="dash-profile__big">
                           <img src={pics} alt=""  className='img-fluid '/>
                       </div>
                       <p className="text-white lead text-capitalize">good morning Victor</p>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default DashSideBar
