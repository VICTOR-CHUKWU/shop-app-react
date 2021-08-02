import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section>
           <div className="container">
               <div className="row mt-5">
                  <div className="col-12 mt-4">
                  <div className="h1 text-danger text-uppercase text-center">
                       page not found!!
                   </div>
                  </div>
                  <div className="col-12">
                     <Link to='/'>
                     <button className="btn btn-info btn-lg">Go Home</button>
                     </Link>
                  </div>
               </div>
               </div> 
        </section>
    )
}

export default Error
