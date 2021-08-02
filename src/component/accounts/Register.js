import React, {useState, useEffect} from 'react';
import RegisterSuccess from './RegisterSuccess'

import { Link } from 'react-router-dom';
const Register = () => {

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
    });

    const [error, setError] = useState({})
    const [submited, setSubmited] = useState(false)
    const newData = {...data};
   

    const  handleInput = (e) => {
        newData[e.target.id] = e.target.value;
        setData(newData)
        console.log(newData)
    }
 
    //to handle error
    const handleError = (data) =>{
        let error = {}
        if(!data.firstname){
          error.firstname = "first name is required"  
        }
        if(!data.lastname){
            error.lastname = "last name is required"  
          }
        if(!data.email){
            error.email = "email required"
        }else if (!/\S+@\S+\.\S+/.test(data.email)) {
            error.email = 'Email address is invalid';
          }
          if (!data.password) {
            error.password = 'Password is required';
          } else if (data.password.length < 6) {
            error.password = 'Password needs to be 6 characters or more';
          }
          if (!data.phone) {
            error.phone = 'phone number is required';
          } 
         
          return error;
    }

    //submit form
    const submitForm = async(e) =>{
        e.preventDefault();
        const error = handleError(data)
        setError(error)
        if (Object.keys(error).length !== 0){
            return;
        }
        const resp = await fetch('http://localhost:8080/api/users/register', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                firstName: data.firstname,
                lastName: data.lastname,
                email: data.email,
                password: data.password,
                phone: data.phone,  
            })
        })
       
        setData({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone: '',
        })
        setSubmited(true)
        
            return resp.json();
       
       
       
    };

    const removeAlert = () => {
        return setSubmited(false)
    }
   
    return (
        <section className='register'>
            <div className="container px-5 mx-0 mx-lg-4 mt-5">
                <div className="row mt-4 mx-0 mx-lg-5">
                    <h1 className="display__title text-capitalize text-success">create account</h1>

                    <form className='mt-5 w-100'>
                        <div className="form-row mb-5">
                            <div className="col">
                                <label htmlFor="firstname" className='label'>First Name</label>
                                <input type="text" className="form-control w-100 input-border-bottom"  id='firstname' onChange={(e)=>handleInput(e)} value={data.firstname} />
                                {error.firstname && <p className='text-danger'>{error.firstname}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="lastname" className='label'>Last name</label>
                                <input type="text" className="form-control w-100 input-border-bottom"  id='lastname' onChange={(e)=>handleInput(e)} value={data.lastname}/>
                                {error.lastname && <p className='text-danger'>{error.lastname}</p>}
                            </div>
                        </div>
                        <div className="form-row my-4">
                            <div className="col">
                                <label htmlFor="email" className='label'>Email</label>
                                <input type="email" className="form-control w-100 input-border-bottom"  id='email' onChange={(e)=>handleInput(e)} value={data.email} />
                                {error.email && <p className='text-danger'>{error.email}</p>}
                            </div>
                            <div className="col">
                                <label htmlFor="password" className='label'>Password</label>
                                <input type="password" className="form-control w-100 input-border-bottom"  id='password' onChange={(e)=>handleInput(e)} value={data.password}/>
                                {error.password && <p className='text-danger'>{error.password}</p>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-6">
                                <label htmlFor="phone" className='label'>Phone Number</label>
                                <input type="text" className="form-control w-100 input-border-bottom"  id='phone' onChange={(e)=>handleInput(e)} value={data.phone}/>
                                {error.phone && <p className='text-danger'>{error.phone}</p>}
                            </div>

                        </div>
                        <div className="form-group mt-4">
                            <div className="form-check">
                                <input className="form-check-input btn-check-medium " type="checkbox" id="gridCheck" />
                                <label className="form-check-label ml-3" htmlFor="gridCheck">
                                   subscribe to get news on pablo mak
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success w-100 btn-large-font my-3" onClick={(e)=> submitForm(e)} >Sign in</button>
                        <button type="submit" className="btn btn-blue w-100 btn-large-font">Register with facebook</button>
                    </form>
                     <p className='my-4 text-center'>already have an account?<Link to='/customer/account/login' style={{textDecoration:"none"}}> <span className="text-success font-weight-bold">login</span></Link></p>

                     {submited && <RegisterSuccess removeAlert={removeAlert} submited={submited}/>}
                </div>
            </div>
        </section>
    )
}

export default Register
