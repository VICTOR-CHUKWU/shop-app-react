import React from 'react';
import add1 from '../../images/advert1.jpeg';
import add2 from '../../images/advert2.jpeg';

const HomeAdvert = () => {
    return (
        <section className='advert-home my-4'>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className=" p-2 rounded advert-home__images">
                            <img src={add1} alt="" className="img-fluid rounded" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className=" p-2 rounded advert-home__images">
                        <img src={add2} alt="" className="img-fluid rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAdvert
